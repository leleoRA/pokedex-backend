import * as databaseService from "../services/databaseService";
import { Request, Response } from "express";

export async function populateDatabase(req: Request, res: Response) {
    const databaseEmpty = verifyDatabaseStatus();
    if(databaseEmpty) return databaseService.populatePokemonDatabase();
}

export async function verifyDatabaseStatus(){
    const isDatabaseEmpty = databaseService.verifyDatabaseContent();
    if(isDatabaseEmpty) return true;
}


  
  
 