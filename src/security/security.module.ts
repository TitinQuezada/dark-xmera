import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';

@Module({
  imports: [SharedModule],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class SecurityModule {}
