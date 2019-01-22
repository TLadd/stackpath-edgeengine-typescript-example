declare class StackpathEvent {
  respondWith(response: Response | Promise<Response>): void;
  type: string;
  request: Request;
  respondWithEntered: boolean;
}

declare function addEventListener(
  eventName: "fetch",
  callback: (event: StackpathEvent) => void
): void;
