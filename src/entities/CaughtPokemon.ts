import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Pokemon from "./Pokemon";
import User from "./User"


@Entity("caughtPokemons")
export default class CaughtPokemon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    pokemonId: number;

    @ManyToOne(() => Pokemon, pokemon => pokemon.caughtPokemons)
    pokemon: Pokemon;

    @ManyToOne(() => User, user => user.caughtPokemons)
    user: User;
}