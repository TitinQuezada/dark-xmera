import { Injectable } from '@nestjs/common';
import { Routes } from 'src/routes/routes';
import { RrhhHttpClientService } from 'src/utils/http-client/rrhh-http-client.service';
import { OperationResult } from 'src/utils/operation-result';

@Injectable()
export class PositionsService {
  constructor(private readonly rrhhHttpClientService: RrhhHttpClientService) {}

  async getAll(): Promise<OperationResult<Array<any>>> {
    const response = await this.rrhhHttpClientService.get(
      Routes.humanResourcesRoutes.positions,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async getById(id: string): Promise<OperationResult<any>> {
    const response = await this.rrhhHttpClientService.get(
      `${Routes.humanResourcesRoutes.positions}/${id}`,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async create(position: any): Promise<OperationResult<any>> {
    const response = await this.rrhhHttpClientService.post(
      Routes.humanResourcesRoutes.positions,
      position,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async update(id: string, position: any): Promise<OperationResult<any>> {
    const response = await this.rrhhHttpClientService.put(
      `${Routes.humanResourcesRoutes.positions}/${id}`,
      position,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async delete(id: string): Promise<OperationResult<any>> {
    const response = await this.rrhhHttpClientService.delete(
      `${Routes.humanResourcesRoutes.positions}/${id}`,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }
}
