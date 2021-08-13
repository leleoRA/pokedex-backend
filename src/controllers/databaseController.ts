import * as databaseService from "../services/databaseService";

export async function populateDatabase(res: Response) {
    const databaseEmpty = verifyDatabaseStatus();
    if(databaseEmpty) return databaseService.populatePokemonDatabase();
}

export async function verifyDatabaseStatus(){
    const isDatabaseEmpty = databaseService.verifyDatabaseContent();
    if(isDatabaseEmpty) return true;
}


  
  
 