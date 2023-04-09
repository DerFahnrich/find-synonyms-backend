export interface IWordNode {
  word: string;
  synonyms: string[];
}

export interface ISynonyms {
  word: string;
  synonyms: string[];
  transitiveSynonyms: string[];
}

export interface ICreatedSynonyms {
  status: string;
  url: string;
}
