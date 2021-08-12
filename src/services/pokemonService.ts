import { getRepository } from "typeorm";
import Pokemon from "../entities/Pokemon";
import axios from "axios";




export async function getPokemons(userId: number) {
  const allPokemons = getRepository(Pokemon).find();
  return allPokemons;

}
