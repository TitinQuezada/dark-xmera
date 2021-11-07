export class Routes {
  static controllersRoutes = {
    positions: 'api/rrhh/positions',
    deparments: 'api/rrhh/deparments',
    employees: 'api/rrhh/employees',
    authentication: 'api/security/authentication',
    roles: 'api/security/roles',
    modules: 'api/security/modules',
    screens: '/api/security/screens',
  };

  static securityRoutes = {
    permissions: '/api/Authentication/permissions',
    login: '/api/Authentication/login',
    roles: '/api/roles',
    modules: '/api/modules',
    screens: '/api/screens',
  };

  static humanResourcesRoutes = {
    positions: 'positions',
    deparments: 'deparments',
  };
}
