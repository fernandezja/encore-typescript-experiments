import { api } from "encore.dev/api";

interface Planet {
  name: string;
  region: string;
  climate: string;
  terrain: string[];
  dominant_biome: string;
  notable_for: string[];
  political_affiliation: string[];
}

const PLANETS: Planet[] = [
  {
    name: "Tatooine",
    region: "Outer Rim Territories",
    climate: "Arid",
    terrain: ["Deserts", "Canyons", "Dunes"],
    dominant_biome: "Desert",
    notable_for: ["Homeworld of Anakin Skywalker", "Homeworld of Luke Skywalker", "Twin suns"],
    political_affiliation: ["Hutt influence", "Galactic Empire (periodically)", "New Republic era presence"],
  },
  {
    name: "Coruscant",
    region: "Core Worlds",
    climate: "Temperate (artificial urban environment)",
    terrain: ["Cityscape", "Skyscrapers", "Ecumenopolis"],
    dominant_biome: "Urban",
    notable_for: ["Capital of the Galactic Republic", "Seat of the Jedi Order", "Galactic Senate"],
    political_affiliation: ["Galactic Republic", "Galactic Empire", "New Republic (historically linked)"],
  },
  {
    name: "Naboo",
    region: "Mid Rim",
    climate: "Temperate",
    terrain: ["Plains", "Lakes", "Forests", "Swamps"],
    dominant_biome: "Mixed temperate",
    notable_for: ["Homeworld of Padme Amidala", "Gungan settlements", "Elegant human cities"],
    political_affiliation: ["Galactic Republic", "Galactic Empire"],
  },
  {
    name: "Hoth",
    region: "Outer Rim Territories",
    climate: "Frozen",
    terrain: ["Ice plains", "Snowfields", "Glaciers"],
    dominant_biome: "Tundra",
    notable_for: ["Echo Base", "Battle of Hoth"],
    political_affiliation: ["Rebel Alliance presence"],
  },
  {
    name: "Dagobah",
    region: "Outer Rim Territories",
    climate: "Humid",
    terrain: ["Swamps", "Boglands", "Dense vegetation"],
    dominant_biome: "Swamp",
    notable_for: ["Yoda's exile", "Strong connection to the Force"],
    political_affiliation: ["Unaligned"],
  },
  {
    name: "Mustafar",
    region: "Outer Rim Territories",
    climate: "Volcanic",
    terrain: ["Lava rivers", "Volcanoes", "Igneous rock"],
    dominant_biome: "Volcanic",
    notable_for: ["Duel between Obi-Wan Kenobi and Anakin Skywalker", "Darth Vader's fortress"],
    political_affiliation: ["Separatist activity", "Galactic Empire"],
  },
  {
    name: "Kamino",
    region: "Outer Rim Territories",
    climate: "Stormy",
    terrain: ["Oceans", "Platforms", "Waterworld cities"],
    dominant_biome: "Oceanic",
    notable_for: ["Clone army production", "Kaminoan cloning facilities"],
    political_affiliation: ["Galactic Republic", "Galactic Empire"],
  },
  {
    name: "Alderaan",
    region: "Core Worlds",
    climate: "Temperate",
    terrain: ["Mountains", "Forests", "Grasslands"],
    dominant_biome: "Alpine temperate",
    notable_for: ["Homeworld of Leia Organa", "Destroyed by the Death Star"],
    political_affiliation: ["Galactic Republic", "Alderaanian royal house", "Rebel Alliance ties"],
  },
  {
    name: "Kashyyyk",
    region: "Mid Rim",
    climate: "Tropical",
    terrain: ["Forests", "Wroshyr trees", "Rivers"],
    dominant_biome: "Forest",
    notable_for: ["Homeworld of the Wookiees", "Homeworld of Chewbacca"],
    political_affiliation: ["Galactic Republic", "Galactic Empire occupation"],
  },
  {
    name: "Geonosis",
    region: "Outer Rim Territories",
    climate: "Arid",
    terrain: ["Rock deserts", "Canyons", "Hives"],
    dominant_biome: "Desert",
    notable_for: ["Battle of Geonosis", "Separatist droid foundries"],
    political_affiliation: ["Confederacy of Independent Systems", "Galactic Empire activity"],
  },
];

export const listPlanets = api(
  { expose: true, method: "GET", path: "/api/planet" },
  async (): Promise<Planet[]> => PLANETS,
);
