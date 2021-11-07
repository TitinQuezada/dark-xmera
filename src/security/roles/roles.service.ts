import { Injectable } from '@nestjs/common';
import { Routes } from 'src/routes/routes';
import { HttpClientService } from 'src/utils/http-client/http-client.service';
import { OperationResult } from 'src/utils/operation-result';

@Injectable()
export class RolesService {
  private readonly rolesRoute = Routes.securityRoutes.roles;

  constructor(private readonly httpClientService: HttpClientService) {}

  async getAll(): Promise<OperationResult<Array<any>>> {
    this.httpClientService.setBaseUrl(process.env.DARK_XMERA_SECURITY_URL);

    const response = await this.httpClientService.get(this.rolesRoute);

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async getById(id: string): Promise<OperationResult<any>> {
    this.httpClientService.setBaseUrl(process.env.DARK_XMERA_SECURITY_URL);

    const response = await this.httpClientService.get(
      `${this.rolesRoute}/${id}`,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async create(rol: any): Promise<OperationResult<any>> {
    this.httpClientService.setBaseUrl(process.env.DARK_XMERA_SECURITY_URL);

    const response = await this.httpClientService.post(this.rolesRoute, rol);

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async update(id: string, rol: any): Promise<OperationResult<any>> {
    this.httpClientService.setBaseUrl(process.env.DARK_XMERA_SECURITY_URL);

    const response = await this.httpClientService.put(
      `${this.rolesRoute}/${id}`,
      rol,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async delete(id: string): Promise<OperationResult<any>> {
    this.httpClientService.setBaseUrl(process.env.DARK_XMERA_SECURITY_URL);

    const response = await this.httpClientService.delete(
      `${this.rolesRoute}/${id}`,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }
}
