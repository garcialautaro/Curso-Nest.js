import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    MongooseModule.forRoot('mongodb+srv://user_node_cafe:JXKFUnxIN6GTdyaT@miclustercafe.jugtgx2.mongodb.net/pokedex'),
    PokemonModule,
    CommonModule,
  ],
})
export class AppModule {}
