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
import { ModulesService } from './modules.service';

@Controller(Routes.controllersRoutes.modules)
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}

  @Get()
  async getAll() {
    const operationResult = await this.modulesService.getAll();

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const operationResult = await this.modulesService.getById(id);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Post()
  async create(@Body() module): Promise<HttpResponse<any>> {
    const operationResult = await this.modulesService.create(module);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() module,
  ): Promise<HttpResponse<any>> {
    const operationResult = await this.modulesService.update(id, module);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<HttpResponse<any>> {
    const operationResult = await this.modulesService.delete(id);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }
}
