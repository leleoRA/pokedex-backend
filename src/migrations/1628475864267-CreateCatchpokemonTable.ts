import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCatchpokemonTable1628475864267 implements MigrationInterface {
    name = 'CreateCatchpokemonTable1628475864267'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "catchpokemons" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "pokemonId" integer NOT NULL, CONSTRAINT "PK_6d515cad19f92810c9fcb34e07c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "catchpokemons"`);
    }

}
