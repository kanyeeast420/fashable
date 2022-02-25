import express, { Request, Response } from "express";

export const mainRouter = express.Router();

/**
 *          Routes
 */

mainRouter.get("/", async (req: Request, res: Response) => {
  res.send({
    "🌍": true,
    "🛍️": false,

    status: {
      online: true,
      port: process.env.PORT,
    },

    routes: {
      "/": "🌍",
      "/feed": "🏗️",
      "/releases": {
        "/": "🏗️",
        "/:id": "🏗️",
      },
      "/sneakers": {
        "/": "🏗️",
        "/:sneaker": "🏗️",
      },
      "/brands": {
        "/": "🏗️",
        "/:brand": "🏗️",
      },
      "/sales": {
        "/": "🏗️",
        "/:id": "🏗️",
      },
    },

    meta: {
      "🌍": "Kanye East",
      "🦜": "https://twitter.com/notkanyeeast",
      "🧑‍💻": "https://github.com/kanyeeast420/fashable",
    },
  });
});
