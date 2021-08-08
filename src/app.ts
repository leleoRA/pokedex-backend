import "./setup";
import authMiddleware from "./middlewares/authMiddleware";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as userController from "./controllers/userController";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-in", userController.signIn);

app.post("/sign-up", userController.signUp);

app.get("/pokemons", authMiddleware)

export async function init () {
  await connectDatabase();
}

export default app;
