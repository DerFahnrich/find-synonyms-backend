import { ISynonyms } from "../interfaces";
import { SynonymsGraph } from "../models/SynonymsGraph.class";

const nodes = SynonymsGraph.nodes;

export const checkIfWordExists = (word: string): boolean => {
  return nodes[word] ? true : false;
};

export const getArrayOfMatchingWords = (searchTerm: string): string[] => {
  const arrayOfMatchingWords: string[] = [];

  for (const key in nodes) {
    if (key.startsWith(searchTerm)) {
      arrayOfMatchingWords.push(key);
    }
  }

  return arrayOfMatchingWords;
};

export const getSynonymsToWord = (word: string): ISynonyms => {
  const synonyms = SynonymsGraph.getSynonyms(word);
  const transitiveSynonyms = SynonymsGraph.getTransitiveSynonymsWithBFS(word);
  const filteredTransitivSynonyms = transitiveSynonyms.filter((ts) => !synonyms.includes(ts));

  const allSynonyms: ISynonyms = {
    word,
    synonyms,
    transitiveSynonyms: filteredTransitivSynonyms,
  };

  return allSynonyms;
};
