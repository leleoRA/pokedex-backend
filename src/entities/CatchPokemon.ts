
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("catchpokemons")
export default class Catchpokemons {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    pokemonId: number;
}