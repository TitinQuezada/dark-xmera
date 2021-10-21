import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RrhhHttpClientService } from 'src/utils/http-client/rrhh-http-client.service';

@Module({
  imports: [HttpModule],
  providers: [RrhhHttpClientService],
  exports: [RrhhHttpClientService, HttpModule],
})
export class SharedModule {}
