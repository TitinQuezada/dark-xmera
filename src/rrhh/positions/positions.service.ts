import { Injectable } from '@nestjs/common';
import { Routes } from 'src/routes/routes';
import { HttpClientService } from 'src/utils/http-client/http-client.service';
import { OperationResult } from 'src/utils/operation-result';

@Injectable()
export class PositionsService {
  private readonly positionsRoute = Routes.humanResourcesRoutes.positions;

  constructor(private readonly httpClientService: HttpClientService) {}

  async getAll(): Promise<OperationResult<Array<any>>> {
    this.httpClientService.setBaseUrl(process.env.DARK_XMERA_RRHH_URL);

    const response = await this.httpClientService.get(this.positionsRoute);

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async getById(id: string): Promise<OperationResult<any>> {
    this.httpClientService.setBaseUrl(process.env.DARK_XMERA_RRHH_URL);

    const response = await this.httpClientService.get(
      `${this.positionsRoute}/${id}`,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async create(position: any): Promise<OperationResult<any>> {
    this.httpClientService.setBaseUrl(process.env.DARK_XMERA_RRHH_URL);

    const response = await this.httpClientService.post(
      this.positionsRoute,
      position,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async update(id: string, position: any): Promise<OperationResult<any>> {
    this.httpClientService.setBaseUrl(process.env.DARK_XMERA_RRHH_URL);

    const response = await this.httpClientService.put(
      `${this.positionsRoute}/${id}`,
      position,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async delete(id: string): Promise<OperationResult<any>> {
    this.httpClientService.setBaseUrl(process.env.DARK_XMERA_RRHH_URL);

    const response = await this.httpClientService.delete(
      `${this.positionsRoute}/${id}`,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }
}
