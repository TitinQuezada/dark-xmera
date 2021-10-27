import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RrhhModule } from './rrhh/rrhh.module';
import { SecurityModule } from './security/security.module';

@Module({
  imports: [ConfigModule.forRoot(), RrhhModule, SecurityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
