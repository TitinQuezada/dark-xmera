import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { RolesService } from './roles/roles.service';
import { RolesController } from './roles/roles.controller';
import { ModulesService } from './modules/modules.service';
import { ScreensService } from './screens/screens.service';
import { ScreensController } from './screens/screens.controller';
import { ModulesController } from './modules/modules.controller';
import { PermissionsMiddleware } from 'src/middlewares/permissions.middleware';

@Module({
  imports: [SharedModule],
  controllers: [
    AuthenticationController,
    RolesController,
    ScreensController,
    ModulesController,
  ],
  providers: [
    AuthenticationService,
    RolesService,
    ModulesService,
    ScreensService,
  ],
})
export class SecurityModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PermissionsMiddleware).forRoutes(RolesController);
    consumer.apply(PermissionsMiddleware).forRoutes(ScreensController);
    consumer.apply(PermissionsMiddleware).forRoutes(ModulesController);
  }
}
