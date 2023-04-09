import { IWordNode } from "../interfaces";
import { words } from "../data/words";

export class SynonymsGraph {
  static nodes: { [word: string]: IWordNode } = words;

  constructor() {}

  static addWord(word: string) {
    const node: IWordNode = { word, synonyms: [] };
    this.nodes[word] = node;
  }

  static addSynonyms(wordNode: IWordNode) {
    const wordLowerCase = wordNode.word.toLowerCase();

    if (!this.nodes[wordLowerCase]) {
      this.addWord(wordLowerCase);
    }

    for (const s of wordNode.synonyms) {
      const synonymLowercase = s.toLowerCase();
      if (!this.nodes[synonymLowercase]) {
        this.addWord(synonymLowercase);
      }

      this.nodes[wordLowerCase ].synonyms.push(synonymLowercase);
      this.nodes[synonymLowercase].synonyms.push(wordLowerCase);
    }
  }

  static getSynonyms(word: string): string[] {
    if (this.nodes[word]) {
      return this.nodes[word].synonyms;
    } else {
      return [];
    }
  }

  static getTransitiveSynonymsWithDFS(word: string): string[] {
    const visited: string[] = [];
    const transitiveSynonyms: string[] = [];
    this.dfs(word, visited, transitiveSynonyms);
    return transitiveSynonyms;
  }

  static getTransitiveSynonymsWithBFS(word: string): string[] {
    const queue: string[] = [word];
    const visited: string[] = [...queue];
    const transitiveSynonyms: string[] = [];

    while (queue.length > 0) {
      const currentWord = queue.shift()!;
      const synonyms = this.getSynonyms(currentWord);
      for (const synonym of synonyms) {
        if (!visited.includes(synonym)) {
          queue.push(synonym);
          visited.push(synonym);
          transitiveSynonyms.push(synonym);
        }
      }
    }

    return transitiveSynonyms;
  }

  private static dfs(word: string, visited: string[], transitiveSynonyms: string[]) {
    visited.push(word);
    const synonyms = this.getSynonyms(word);
    synonyms.forEach((synonym) => {
      if (!visited.includes(synonym)) {
        transitiveSynonyms.push(synonym);
        this.dfs(synonym, visited, transitiveSynonyms);
      }
    });
  }
}
