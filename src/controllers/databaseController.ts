import * as databaseService from "../services/databaseService";

export async function verifyDatabaseStatus(res: Response) {

    const isDatabaseEmpty = databaseService.verifyDatabaseContent();

    if(isDatabaseEmpty){
        databaseService.populatePokemonDatabase();
    }
}


  
  
 