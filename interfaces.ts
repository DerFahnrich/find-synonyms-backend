export interface IWordNode {
  word: string;
  synonyms: Set<string>;
}

export interface IWordNodeDto {
  word: string;
  synonyms: string[];
}
