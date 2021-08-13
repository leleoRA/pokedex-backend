import { Request, Response } from "express";
import * as pokemonService from "../services/pokemonService";

export async function getPokemons(req: Request, res: Response){
    const pokemons = await pokemonService.getPokemons();
    if(!pokemons) return res.sendStatus(404);
    res.send(pokemons).status(200);
}

export async function addPokemon(req: Request, res: Response){
    const { pokemonId } = req.params;
    const { userId } = res.locals;
    if(!pokemonId) return res.status(400);
    const stuckPokemon = await pokemonService.addPokemonToMyPokedex(Number(pokemonId), Number(userId));
    if(!stuckPokemon) return res.status(400);
    return res.status(200);
}

export async function removePokemon(req: Request, res: Response){
    const { pokemonId } = req.params;
    const { userId } = res.locals;
    if(!pokemonId) return res.status(400);
    const freePokemon = await pokemonService.removePokemonFromMyPokedex(pokemonId, userId);
    if(!freePokemon) return res.status(400);
    return res.status(200);
}




   

