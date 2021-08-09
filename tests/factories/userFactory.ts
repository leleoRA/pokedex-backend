import { getRepository } from "typeorm";
import bcrypt from "bcrypt";
import User from "../../src/entities/User";
import  Session  from "../../src/entities/Session";
import { UserInterface } from "../../src/interfaces/UserInterfaces";
import faker from "faker";
faker.locale = "pt_BR";


export async function createUser () {
  const password = faker.internet.password();
  const email = faker.internet.email();

  const user = {
    email,
    password,
    confirmPassword: password
  };

  return user;
}

export async function registerUser(){
  const password = faker.internet.password();
  const email = faker.internet.email();
  const repository = getRepository(User);
  await repository.save({
      email,
      password: bcrypt.hashSync(password,10)
  });

  return {email, password};
}

export async function findByName(email:string){
  const user = await getRepository(User).findOne({where:{email}})
  return user;
}

// export async function logUser(id:number){
//   const repository = getRepository(Session)
//   const newSession = repository.create();
//   newSession.userId = id
//   const session = await repository.insert(newSession)
//   const data = session.identifiers[0];
//   const chaveSecreta = process.env.JWT_SECRET;
//   const configuracoes = { expiresIn: 60*60*24*30 } 
//   return 'Bearer '+jwt.sign(data, chaveSecreta, configuracoes);
// }