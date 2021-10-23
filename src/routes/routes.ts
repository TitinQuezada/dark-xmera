export class Routes {
  static controllersRoutes = {
    positions: 'api/rrhh/positions',
    deparments: 'api/rrhh/deparments',
    employees: 'api/rrhh/employees',
  };

  static securityRoutes = {
    permissions: '/api/Authentication/permissions',
  };

  static humanResourcesRoutes = {
    positions: 'positions',
    deparments: 'deparments',
  };
}
