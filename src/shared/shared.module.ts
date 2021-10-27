import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpClientService } from 'src/utils/http-client/http-client.service';

@Module({
  imports: [HttpModule],
  providers: [HttpClientService],
  exports: [HttpClientService, HttpModule],
})
export class SharedModule {}
