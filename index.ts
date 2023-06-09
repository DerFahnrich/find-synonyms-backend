import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

import { wordController } from "./controllers";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/words", wordController);

app.listen(port, () => {
  console.log(`server: Server is running att http://localhost:${port}`);
});
