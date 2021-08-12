import { Request, Response } from "express";
import * as pokemonService from "../services/pokemonService";

export async function getPokemons(req: Request, res: Response){

    const { userId } = res.locals;
    const pokemons = await pokemonService.getPokemons(userId);
    if(!pokemons) return res.sendStatus(404);
    res.send(pokemons).status(200);

}

// export async function catchPokemon(req: Request, res: Response){

// }

// export async function releasePokemon(req: Request, res: Response){

// }




   

