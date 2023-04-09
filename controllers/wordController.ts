import express, { Request, Response, Router } from "express";

import { ErrorResponse, SynonymsGraph } from "../models";
import { checkIfWordExists, getArrayOfMatchingWords, getSynonymsToWord } from "../services";
import { ICreatedSynonyms, IWordNode } from "../interfaces";

export const wordController: Router = express.Router();

wordController.get("", (req: Request, res: Response) => {
  const searchTerm = req.query.s as string;

  if (!searchTerm) {
    return res
      .status(400)
      .json(new ErrorResponse("Bad request, you're missing the search term query: s", 400));
  }

  const arrayOfMatchingWords = getArrayOfMatchingWords(searchTerm);

  if (arrayOfMatchingWords.length === 0) {
    return res.status(404).json(new ErrorResponse("No results for that search query", 404));
  }

  res.json(arrayOfMatchingWords);
});

wordController.get("/:word", (req: Request, res: Response) => {
  const word = req.params.word;

  if (!checkIfWordExists(word)) {
    return res.status(404).json(new ErrorResponse("No results for that search", 404));
  }

  const allSynonyms = getSynonymsToWord(word);

  if (allSynonyms.synonyms.length === 0) {
    return res.status(404).json(new ErrorResponse("No synonyms to that word were found", 404));
  }

  res.json(allSynonyms);
});

wordController.post("", (req: Request, res: Response) => {
  const body: IWordNode = req.body;

  if (!body.word || body.synonyms.length === 0) {
    return res.status(400).json(new ErrorResponse("Data is malformed", 400));
  }

  SynonymsGraph.addSynonyms(body);

  const urlToNewEntry = `${req.protocol}://${req.get("host")}${req.originalUrl}/${body.word}`;

  const newSynonyms: ICreatedSynonyms = {
    status: "Your synonyms were created successfully!",
    url: urlToNewEntry,
  };

  res.status(202).json(newSynonyms);
});
