import { vi } from "vitest";

type AnyFn = (...args: unknown[]) => unknown;

const apiStub = ((...args: unknown[]) => {
  const maybeHandler = args[args.length - 1];
  if (typeof maybeHandler !== "function") {
    throw new Error("Expected Encore api handler function");
  }
  return maybeHandler as AnyFn;
}) as AnyFn & { raw: AnyFn };

apiStub.raw = ((...args: unknown[]) => {
  const maybeHandler = args[args.length - 1];
  if (typeof maybeHandler !== "function") {
    throw new Error("Expected Encore raw api handler function");
  }
  return maybeHandler as AnyFn;
}) as AnyFn;

vi.mock("encore.dev/api", () => ({
  api: apiStub,
}));

vi.mock("encore.dev", () => ({
  appMeta: () => ({
    apiBaseUrl: "http://localhost:4000",
  }),
}));
