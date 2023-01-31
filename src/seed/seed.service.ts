import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';

import { PokeResponse } from './interfaces/poke-response.interface';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter
  ){}


  async executeSeed() {

    await this.pokemonModel.deleteMany();

    const data = await this.http.get<PokeResponse>("https://pokeapi.co/api/v2/pokemon?limit=600")
    
    //const insertPromisesArray = [];
    const pokemonToInsert = [];
    data.results.forEach( ({ name, url }) => {
      
      const segments = url.split("/");

      const no = +segments[segments.length - 2];

      // await this.pokemonModel.create({name, no})
      //insertPromisesArray.push(this.pokemonModel.create({name, no}))
      pokemonToInsert.push({name, no})
    });

    this.pokemonModel.insertMany(pokemonToInsert);
    //await Promise.all(insertPromisesArray);

    return `Se insertaron 600 pokemon`;
  }
}
