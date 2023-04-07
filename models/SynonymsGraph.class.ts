import { IWordNode } from "../interfaces";
import { words } from "../data/words";

export class SynonymsGraph {
  static nodes: { [word: string]: IWordNode } = words;

  constructor() {}

  static addWord(word: string) {
    const node: IWordNode = { word, synonyms: new Set() };
    this.nodes[word] = node;
  }

  static addSynonym(word: string, synonym: string) {
    if (!this.nodes[word]) {
      this.addWord(word);
    }
    if (!this.nodes[synonym]) {
      this.addWord(synonym);
    }
    this.nodes[word].synonyms.add(synonym);
    this.nodes[synonym].synonyms.add(word);
  }

  static getSynonyms(word: string): Set<string> {
    if (this.nodes[word]) {
      console.log(this.nodes[word].synonyms);
      return this.nodes[word].synonyms;
    } else {
      return new Set();
    }
  }

  static getTransitiveSynonymsWithDFS(word: string): Set<string> {
    const visited: Set<string> = new Set();
    const transitiveSynonyms: Set<string> = new Set();
    this.dfs(word, visited, transitiveSynonyms);
    return transitiveSynonyms;
  }

  static getTransitiveSynonymsWithBFS(word: string): Set<string> {
    const queue: string[] = [word];
    const visited: Set<string> = new Set(queue);
    const transitiveSynonyms: Set<string> = new Set();

    while (queue.length > 0) {
      const currentWord = queue.shift()!;
      const synonyms = this.getSynonyms(currentWord);
      for (const synonym of synonyms) {
        if (!visited.has(synonym)) {
          queue.push(synonym);
          visited.add(synonym);
          transitiveSynonyms.add(synonym);
        }
      }
    }

    return transitiveSynonyms;
  }

  private static dfs(word: string, visited: Set<string>, transitiveSynonyms: Set<string>) {
    visited.add(word);
    const synonyms = this.getSynonyms(word);
    synonyms.forEach((synonym) => {
      if (!visited.has(synonym)) {
        transitiveSynonyms.add(synonym);
        this.dfs(synonym, visited, transitiveSynonyms);
      }
    });
  }
}
