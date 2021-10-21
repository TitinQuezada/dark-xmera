import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RrhhModule } from './rrhh/rrhh.module';

@Module({
  imports: [ConfigModule.forRoot(), RrhhModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
