export class Routes {
  static controllersRoutes = {
    positions: 'api/rrhh/positions',
    deparments: 'api/rrhh/deparments',
    employees: 'api/rrhh/employees',
    authentication: 'api/security/authentication',
  };

  static securityRoutes = {
    permissions: '/api/Authentication/permissions',
    login: '/api/Authentication/login',
  };

  static humanResourcesRoutes = {
    positions: 'positions',
    deparments: 'deparments',
  };
}
