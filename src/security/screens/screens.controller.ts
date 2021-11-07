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
import { ScreensService } from './screens.service';

@Controller(Routes.controllersRoutes.screens)
export class ScreensController {
  constructor(private readonly screensService: ScreensService) {}

  @Get()
  async getAll() {
    const operationResult = await this.screensService.getAll();

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const operationResult = await this.screensService.getById(id);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Post()
  async create(@Body() screen): Promise<HttpResponse<any>> {
    const operationResult = await this.screensService.create(screen);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() screen,
  ): Promise<HttpResponse<any>> {
    const operationResult = await this.screensService.update(id, screen);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<HttpResponse<any>> {
    const operationResult = await this.screensService.delete(id);

    if (!operationResult.success) {
      return HttpResponse.getFailedResponse(operationResult.errorMessage);
    }

    return HttpResponse.getSuccessResponse(operationResult.entity);
  }
}
