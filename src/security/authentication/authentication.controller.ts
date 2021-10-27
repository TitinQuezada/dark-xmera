import { Body, Controller, Post } from '@nestjs/common';
import { Routes } from 'src/routes/routes';
import { HttpResponse } from 'src/utils/http-response';
import { AuthenticationService } from './authentication.service';

@Controller(Routes.controllersRoutes.authentication)
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}
  @Post('login')
  async login(@Body() loginViewModel): Promise<HttpResponse<any>> {
    const operationResult = await this.authenticationService.login(
      loginViewModel,
    );

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }
}
