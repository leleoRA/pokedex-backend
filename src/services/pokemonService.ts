import { number } from "joi";
import { getRepository } from "typeorm";
import Pokemon from "../entities/Pokemon";
import CaughtPokemon from "../entities/CaughtPokemon";

export async function getPokemons() {
  const allPokemons = getRepository(Pokemon).find({order: {number: "ASC"}});
  return allPokemons;
}

export async function addPokemonToMyPokedex(pokemonId: string, userId: string) {

  const pokemon = await getRepository(Pokemon).findOne({ id: pokemonId });

  if(pokemon.inMyPokemons === false){
    await getRepository(CaughtPokemon).save({userId, pokemonId});
    pokemon.inMyPokemons = true;
    return true;
  }
  return 409;  
}

export async function removePokemonFromMyPokedex(pokemonId: string, userId: string) {
  
}
