import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //POSTGRES
      // sqlite
      //   type: 'sqlite',
      //   database: 'db',
      //   autoLoadEntities: true,
      //   //entities: [__dirname + '/../**/*.entity.{js,ts}'],
      //   synchronize: true,
      // postgresql
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'docker',
      database: 'users',
      entities: [UserEntity],
      synchronize: true,

      // MONGODB
      //     type: 'mongodb',
      //     host: process.env.DB_HOST,
      //     port: parseInt(process.env.DB_PORT),
      //     username: process.env.DB_USERNAME,
      //     password: process.env.DB_PASSWORD,
      //     database: process.env.DB_DATABASE,
      //     ssl: true,

      //     autoLoadEntities: true,

      //     // Only enable this option if your application is in development,
      //     // otherwise use TypeORM migrations to sync entity schemas:
      //     // https://typeorm.io/#/migrations
      //     synchronize: true,
      //   }),
      //   DestinationsModule,
      // ],
      // controllers: [AppController],
      // providers: [AppService],
    }),
  ],
})
export class DatabaseModule {}
