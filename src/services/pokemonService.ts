import { getRepository } from "typeorm";
import Pokemon from "../entities/Pokemon";
import axios from "axios";




export async function getPokemons() {
  const allPokemons = getRepository(Pokemon).find();
  return allPokemons;

}
