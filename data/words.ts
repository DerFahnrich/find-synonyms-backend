import { WordNodesObject } from "../types";

export const words: WordNodesObject = {
  hi: {
    word: "hi",
    synonyms: ["hello", "yo"],
  },
  hello: {
    word: "hello",
    synonyms: ["hi", "yo"],
  },
  yo: {
    word: "yo",
    synonyms: ["hello", "hi"],
  },
  goodbye: {
    word: "goodbye",
    synonyms: ["bye", "adios"],
  },
  bye: {
    word: "bye",
    synonyms: ["goodbye", "adios"],
  },
  adios: {
    word: "adios",
    synonyms: ["bye", "goodbye"],
  },
  happy: {
    word: "happy",
    synonyms: ["felicitous", "glad"],
  },
  felicitous: {
    word: "felicitous",
    synonyms: ["happy"],
  },
  glad: {
    word: "glad",
    synonyms: ["happy", "beaming"],
  },
  beaming: {
    word: "beaming",
    synonyms: ["glad", "radiant"],
  },
  radiant: {
    word: "radiant",
    synonyms: ["beaming"],
  },
};
