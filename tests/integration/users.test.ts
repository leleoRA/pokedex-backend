import supertest from "supertest";
import { getConnection } from "typeorm";
import * as userFactory from "../factories/userFactory";

import app, { init } from "../../src/app";
import { createUser } from "../factories/userFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("POST /sign-up", () => {

  it("should answer with status 201 for a valid input data", async () => {
    const user = userFactory.createUser();
    const response = await supertest(app).post("/sign-up").send(user);
    expect(response.status).toBe(201);    
  });

  it("should answer with status 400 for password and confirm password divergence", async () => {
    const user = {email:"teste@teste.com",password:"rightOne",confirmPassword:"wrongOne"}
    const response = await supertest(app).post("/sign-up").send(user);
    expect(response.status).toBe(400);    
  });

  it("should answer with status 400 for a invalid input data", async () => {
    const user = {email:"12345",password:"rightOne",confirmPassword:"rightOne"}
    const response = await supertest(app).post("/sign-up").send(user);
    expect(response.status).toBe(400);    
  });

  it("should answer with status 409 if the user already exist", async () => {
    const user = userFactory.createUser;
    await supertest(app).post("/sign-up").send(user)
    const response = await supertest(app).post("/sign-up").send(user);
    expect(response.status).toBe(409);    
  });


});
