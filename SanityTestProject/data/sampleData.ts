export interface Word {
  _id: string;

  // term: string;
  // definition: string;
  // explanation: string;
  // acronym?: string;
  name: string;
}

export class WordUtils {
  static getTermById(words: Word[], id: string | undefined) {
    return words.find(word => word._id === id);
  }

  static getTitle(word: Word | undefined) {
    if (!word) {
      console.log("!word")
      return undefined;
    }
    //return (word.acronym ? word.acronym + ': ' : '') + word.term;
    return word.name;
  }

  static getWordsFromIds(words: Word[], ids: string[]): Word[] {
    const set = new Set(ids);
    return words.filter(word => set.has(word._id));
  }
}
