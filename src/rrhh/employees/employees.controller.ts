import { Controller, Get, Post } from '@nestjs/common';
import { Routes } from 'src/routes/routes';
import { EmployeesService } from './employees.service';

@Controller(Routes.controllersRoutes.employees)
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}
  @Get()
  getAll() {
    return 'prueba';
  }
}
