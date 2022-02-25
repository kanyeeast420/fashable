import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { mainRouter } from "./router";

dotenv.config();

/**
 *          App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *         App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/", mainRouter);

/**
 *          Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listining on http://localhost:${PORT}`);
});
