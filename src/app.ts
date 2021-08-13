import "./setup";
import authMiddleware from "./middlewares/authMiddleware";
import handleError from "./middlewares/errorMiddleware";
import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database";
import * as userController from "./controllers/userController";
import * as pokemonController from "./controllers/pokemonController";
import * as databaseController from "./controllers/databaseController";

const app = express();
app.use(cors());
app.use(express.json());
app.use(handleError);

app.post("/sign-up", userController.signUp);
app.post("/sign-in", userController.signIn);
app.post("/populate-database", databaseController.verifyDatabaseStatus);
app.get("/pokemons", authMiddleware, pokemonController.getPokemons);
app.post("/my-pokemons/:id/add", authMiddleware, pokemonController.addPokemon);
app.post("/my-pokemons/:id/remove", authMiddleware, pokemonController.removePokemon);

export async function init () {
  await connectDatabase();
}

export default app;
