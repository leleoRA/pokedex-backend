import { Request, Response } from "express";
import {signInData, signUpData} from "../schemas/userSchemas";
import { UserInterface, UserRegisterData } from "../interfaces/UserInterfaces";
import * as pokemonService from "../services/pokemonService"

export async function verifyDatabaseStatus(res: Response) {
    const isDatabaseEmpty = pokemonService.verifyDatabaseContent();

    if(isDatabaseEmpty){
        pokemonService.populatePokemonDatabase();
    }
}


// export async function getPokemons(req: Request, res: Response){

// }

// export async function catchPokemon(req: Request, res: Response){

// }

// export async function releasePokemon(req: Request, res: Response){

// }




   

