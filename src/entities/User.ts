import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Session from "./Session";
import CaughtPokemon from "./CaughtPokemon";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];

  @OneToMany(() => CaughtPokemon, (caughtPokemons) => caughtPokemons.user)
  caughtPokemons: CaughtPokemon[];
}
