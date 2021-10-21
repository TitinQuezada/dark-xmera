import { Controller, Get, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('api/rrhh/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}
  @Get()
  getAll() {
    return 'prueba';
  }
}
