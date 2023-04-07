import express, { Request, Response, Router } from "express";
import { SynonymsGraph } from "../models/SynonymsGraph.class";
import { WordNodesDto, WordNodesObject } from "../types";
import { ErrorResponse } from "../models/ErrorResponse.class";

export const wordController: Router = express.Router();
const nodes = SynonymsGraph.nodes;

wordController.get("", (req: Request, res: Response) => {
  const searchTerm = req.query.s as string;
  console.log(searchTerm);

  if (!searchTerm) {
    return res
      .status(400)
      .json(new ErrorResponse("Bad request, you're missing the search term query: s", 400));
  }

  const arrayOfMatchingWords: string[] = [];

  for (const key in nodes) {
    if (key.startsWith(searchTerm)) {
      arrayOfMatchingWords.push(key);
    }
  }

  if (arrayOfMatchingWords.length === 0) {
    return res.status(404).json(new ErrorResponse("The search param yielded no results", 404));
  }

  res.json(arrayOfMatchingWords);
});
