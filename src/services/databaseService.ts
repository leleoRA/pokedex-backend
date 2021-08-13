import { getRepository } from "typeorm";
import Pokemon from "../entities/Pokemon";
import axios from "axios";

export async function verifyDatabaseContent() {
  const pokemonInDatabase = getRepository(Pokemon).findOne({ where: { id: 1 }, });
  if (pokemonInDatabase) return false;
  else return true;
}

export async function populatePokemonDatabase() {
  const pokemonsFromApi = getPokemonsFromAPIAndSave();
  return pokemonsFromApi;
}

export async function getPokemonsFromAPIAndSave(){
  const pokemonsFromApi = [];
  for (let i = 1; i <= 150; i++) {    // I choosed to populate only with 150 pokemons but in API it has at least 700
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const addedPokemon = {
      id: result.data.id, 
      name: result.data.name, 
      number: result.data.order,
      image: result.data.sprites.front_default, 
      weight: result.data.weight,
      height: result.data.height, 
      baseExp: result.data.base_experience, 
      description: "",
    };
    const pokemonSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`);
    addedPokemon.description = pokemonSpecies.data.flavor_text_entries[0].flavor_text.split("\n").join(" ");
    pokemonsFromApi.push(addedPokemon);
  }
  await getRepository(Pokemon).save(pokemonsFromApi);
  return pokemonsFromApi;
}


