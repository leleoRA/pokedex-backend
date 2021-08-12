import { getRepository } from "typeorm";
import Pokemon from "../entities/Pokemon";
import axios from "axios";

export async function verifyDatabaseContent() {
    const pokemonInDatabase = getRepository(Pokemon).findOne({
      where: { id: 1 },
    });
  
    if (pokemonInDatabase) {
      return false;
    } else {
      return true;
    }
  }

   
  export async function populatePokemonDatabase() {
  
    for (let i = 1; i < 200; i++) {
      const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const newPokemon = {
        id: result.data.id,
        name: result.data.name,
        number: result.data.order,
        image: result.data.sprites.front_default,
        weight: result.data.weight,
        height: result.data.height,
        baseExp: result.data.base_experience,
        description: "",
      };
  
      const speciesResult = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${i}`
      );
      newPokemon.description =
        speciesResult.data.flavor_text_entries[0].flavor_text
          .split("\n")
          .join(" ");
      const pokemon = getRepository(Pokemon).create(newPokemon);
      await getRepository(Pokemon).save(pokemon);
    }
    return;
  }