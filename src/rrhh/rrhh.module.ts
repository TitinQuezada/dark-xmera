import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RrhhService } from './rrhh.service';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { PositionsController } from './positions/positions.controller';
import { PositionsService } from './positions/positions.service';
import { SharedModule } from 'src/shared/shared.module';
import { PermissionsMiddleware } from 'src/middlewares/permissions.middleware';

@Module({
  imports: [SharedModule],
  controllers: [EmployeesController, PositionsController],
  providers: [RrhhService, EmployeesService, PositionsService],
})
export class RrhhModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PermissionsMiddleware).forRoutes(EmployeesController);
    consumer.apply(PermissionsMiddleware).forRoutes(PositionsController);
  }
}
