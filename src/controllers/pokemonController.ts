import { Request, Response } from "express";
import {signInData, signUpData} from "../schemas/userSchemas";
import { UserInterface, UserRegisterData } from "../interfaces/UserInterfaces";
import * as pokemonService from "../services/pokemonService";


export async function getPokemons(req: Request, res: Response){

  try{
    const signUpError = signUpData.validate(req.body).error;
    if(signUpError) return res.sendStatus(400);

    const {password, confirmPassword}: UserRegisterData = req.body;
    if(password !== confirmPassword) return res.sendStatus(400);

    const createdUser = await userService.registerUser(req.body);
    if(!createdUser) return res.sendStatus(409);
    res.sendStatus(201);

  }catch (err){
    console.log(err);
    res.sendStatus(500);
  }
}


export async function catchPokemon(req: Request, res: Response){

  try{
    const signInError = signInData.validate(req.body).error;
    if(signInError) return res.sendStatus(400);

    const {email, password}: UserInterface = req.body;
    const token = await userService.login({ email, password });
    if(!token) return res.sendStatus(401);
    res.send({ token }).status(200);

  }catch (err){
    console.log(err);
    res.sendStatus(500);
  }
}

export async function releasePokemon(req: Request, res: Response){

    try{
      const signInError = signInData.validate(req.body).error;
      if(signInError) return res.sendStatus(400);
  
      const {email, password}: UserInterface = req.body;
      const token = await userService.login({ email, password });
      if(!token) return res.sendStatus(401);
      res.send({ token }).status(200);
  
    }catch (err){
      console.log(err);
      res.sendStatus(500);
    }
  }