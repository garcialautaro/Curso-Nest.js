import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    MongooseModule.forRoot(process.env.MONGODB_CS),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {

}
