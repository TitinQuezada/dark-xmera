import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HttpResponse } from 'src/utils/http-response';
import { PositionsService } from './positions.service';

@Controller('api/rrhh/positions')
export class PositionsController {
  constructor(private readonly positionsService: PositionsService) {}

  @Get()
  async getAll() {
    const operationResult = await this.positionsService.getAll();

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const operationResult = await this.positionsService.getById(id);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Post()
  async create(@Body() position): Promise<HttpResponse<any>> {
    const operationResult = await this.positionsService.create(position);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() position,
  ): Promise<HttpResponse<any>> {
    const operationResult = await this.positionsService.update(id, position);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<HttpResponse<any>> {
    const operationResult = await this.positionsService.delete(id);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }
}
