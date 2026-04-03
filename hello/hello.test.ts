import { describe, expect, test } from "vitest";
import { get } from "./hello";

describe("get", () => {
  test("should combine string with parameter value", async () => {
    const resp = await get({ name: "world" });
    expect(resp.message).toBe("Hello world!");
  });

  test("should preserve whitespace in name", async () => {
    const resp = await get({ name: "  Leia  " });
    expect(resp.message).toBe("Hello   Leia  !");
  });

  test("should handle empty name", async () => {
    const resp = await get({ name: "" });
    expect(resp.message).toBe("Hello !");
  });

  test("should support unicode and symbols", async () => {
    const resp = await get({ name: "R2-D2 & C-3PO" });
    expect(resp.message).toBe("Hello R2-D2 & C-3PO!");
  });
});
