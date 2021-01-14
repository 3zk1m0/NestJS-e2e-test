import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UsersService } from './user.service';

import { TypeOrmConfigService } from './TypeOrmConfig.service';
import { User } from './User.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      // imports: [ConfigModule],
      useClass: TypeOrmConfigService,
    }),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [AppController],
  providers: [UsersService],
})
export class AppModule {}
