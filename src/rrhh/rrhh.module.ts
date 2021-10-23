import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { PositionsController } from './positions/positions.controller';
import { PositionsService } from './positions/positions.service';
import { SharedModule } from 'src/shared/shared.module';
import { PermissionsMiddleware } from 'src/middlewares/permissions.middleware';
import { DeparmentsController } from './deparments/deparments.controller';
import { DeparmentsService } from './deparments/deparments.service';

@Module({
  imports: [SharedModule],
  controllers: [EmployeesController, PositionsController, DeparmentsController],
  providers: [EmployeesService, PositionsService, DeparmentsService],
})
export class RrhhModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PermissionsMiddleware).forRoutes(EmployeesController);
    consumer.apply(PermissionsMiddleware).forRoutes(PositionsController);
    consumer.apply(PermissionsMiddleware).forRoutes(DeparmentsController);
  }
}
