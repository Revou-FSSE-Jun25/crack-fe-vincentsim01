import { http, HttpResponse } from "msw";

export const handler = [
  http.get("/api/user", () => {
    return HttpResponse.json({ name: "John Doe" });
  }),
];