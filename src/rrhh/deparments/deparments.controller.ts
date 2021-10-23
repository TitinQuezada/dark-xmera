import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Routes } from 'src/routes/routes';
import { HttpResponse } from 'src/utils/http-response';
import { DeparmentsService } from './deparments.service';

@Controller(Routes.controllersRoutes.deparments)
export class DeparmentsController {
  constructor(private readonly deparmentsService: DeparmentsService) {}

  @Get()
  async getAll() {
    const operationResult = await this.deparmentsService.getAll();

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const operationResult = await this.deparmentsService.getById(id);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Post()
  async create(@Body() position): Promise<HttpResponse<any>> {
    const operationResult = await this.deparmentsService.create(position);

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
    const operationResult = await this.deparmentsService.update(id, position);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<HttpResponse<any>> {
    const operationResult = await this.deparmentsService.delete(id);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }
}
