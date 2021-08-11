
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import CaughtPokemon from "./CaughtPokemon";

@Entity("pokemons")
export default class Pokemon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    number: number;

    @Column()
    image: string;

    @Column()
    weight: number;

    @Column()
    height: number;

    @Column()
    baseExp: number;

    @Column()
    description: string;

    @Column({ default: false })
    inMyPokemons: boolean;

    @OneToMany(() => CaughtPokemon, caughtPokemons => caughtPokemons.pokemon)
    caughtPokemons: CaughtPokemon[];
}