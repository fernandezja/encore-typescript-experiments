import { describe, expect, test } from "vitest";
import { listPlanets } from "./planet";

describe("listPlanets", () => {
  test("should return the complete planets list", async () => {
    const planets = await listPlanets();

    expect(planets).toHaveLength(10);
    expect(planets[0]?.name).toBe("Tatooine");
    expect(planets[1]?.name).toBe("Coruscant");
  });

  test("should return planets with the expected shape", async () => {
    const planets = await listPlanets();

    for (const planet of planets) {
      expect(typeof planet.name).toBe("string");
      expect(typeof planet.region).toBe("string");
      expect(typeof planet.climate).toBe("string");
      expect(typeof planet.dominant_biome).toBe("string");

      expect(Array.isArray(planet.terrain)).toBe(true);
      expect(Array.isArray(planet.notable_for)).toBe(true);
      expect(Array.isArray(planet.political_affiliation)).toBe(true);

      expect(planet.terrain.length).toBeGreaterThan(0);
      expect(planet.notable_for.length).toBeGreaterThan(0);
      expect(planet.political_affiliation.length).toBeGreaterThan(0);
    }
  });

  test("should include known planets and keep endpoint order stable", async () => {
    const planets = await listPlanets();
    const planetNames = planets.map((p) => p.name);

    expect(planetNames).toContain("Alderaan");
    expect(planetNames).toContain("Geonosis");
    expect(planetNames.at(-1)).toBe("Geonosis");
  });

  test("should return the same payload across calls", async () => {
    const first = await listPlanets();
    const second = await listPlanets();

    expect(second).toEqual(first);
  });
});
