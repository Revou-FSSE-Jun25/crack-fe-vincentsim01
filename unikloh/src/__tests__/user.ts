// import { describe, it, expect } from "vitest";
import "../setupBrowserTests";

describe("MSW browser mock test", () => {
  it("fetches user from /api/user", async () => {
    const res = await fetch("http://localhost/api/user");
    const data = await res.json();

    expect(data).toEqual({ name: "John Doe" });
  });
});