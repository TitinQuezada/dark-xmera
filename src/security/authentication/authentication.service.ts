import { Injectable } from '@nestjs/common';
import { Routes } from 'src/routes/routes';
import { HttpClientService } from 'src/utils/http-client/http-client.service';
import { OperationResult } from 'src/utils/operation-result';

@Injectable()
export class AuthenticationService {
  constructor(private readonly httpClientService: HttpClientService) {}

  async login(loginViewModel: any): Promise<OperationResult<any>> {
    this.httpClientService.setBaseUrl(process.env.DARK_XMERA_SECURITY_URL);

    const response = await this.httpClientService.post(
      Routes.securityRoutes.login,
      loginViewModel,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }
}
