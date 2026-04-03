import { describe, expect, test } from "vitest";
import { listPlanets } from "./planet";

describe("listPlanets", () => {
  test("should return the complete planets list", async () => {
    const planets = await listPlanets();

    expect(planets).toHaveLength(10);
    expect(planets[0]?.name).toBe("Tatooine");
    expect(planets[1]?.name).toBe("Coruscant");
  });
});
