import { Injectable } from '@nestjs/common';
import { Routes } from 'src/routes/routes';
import { RrhhHttpClientService } from 'src/utils/http-client/rrhh-http-client.service';
import { OperationResult } from 'src/utils/operation-result';

@Injectable()
export class DeparmentsService {
  private readonly deparmentsRoute = Routes.humanResourcesRoutes.deparments;

  constructor(private readonly rrhhHttpClientService: RrhhHttpClientService) {}

  async getAll(): Promise<OperationResult<Array<any>>> {
    const response = await this.rrhhHttpClientService.get(this.deparmentsRoute);

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async getById(id: string): Promise<OperationResult<any>> {
    const response = await this.rrhhHttpClientService.get(
      `${this.deparmentsRoute}/${id}`,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async create(position: any): Promise<OperationResult<any>> {
    const response = await this.rrhhHttpClientService.post(
      this.deparmentsRoute,
      position,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async update(id: string, position: any): Promise<OperationResult<any>> {
    const response = await this.rrhhHttpClientService.put(
      `${this.deparmentsRoute}/${id}`,
      position,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }

  async delete(id: string): Promise<OperationResult<any>> {
    const response = await this.rrhhHttpClientService.delete(
      `${this.deparmentsRoute}/${id}`,
    );

    if (response.error) {
      return OperationResult.fail(response.error.errorMessage);
    }

    return OperationResult.ok(response.data);
  }
}
