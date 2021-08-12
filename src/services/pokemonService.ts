import { getRepository } from "typeorm";
import Pokemon from "../entities/Pokemon";

export async function getPokemons() {
  const allPokemons = getRepository(Pokemon).find();
  return allPokemons;
}
