import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  // constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    if (process.env.NODE_ENV === "test") {
      return {
        type: "sqlite",
        database: ":memory:",
        dropSchema: true,
        autoLoadEntities: true,
        synchronize: true,
        logging: false
    };
    }
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'unicorn_user',
      password: 'magical_password',
      database: 'rainbow_database',
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}
