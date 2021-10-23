import { HttpService } from '@nestjs/axios';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as https from 'https';
import { lastValueFrom } from 'rxjs';
import { Routes } from 'src/routes/routes';
import { HttpResponse } from 'src/utils/http-response';

@Injectable()
export class PermissionsMiddleware implements NestMiddleware {
  constructor(private readonly httpService: HttpService) {}

  async use(request: Request, response: Response, next: NextFunction) {
    const secondPosition = 1;

    const unauthorizedResponse = HttpResponse.getFailedResponse(
      'No tiene autorización',
      401,
    );

    if (!request.headers.authorization) {
      return response.json(unauthorizedResponse);
    }

    const tokenParts = request.headers.authorization.split(' ');

    const token = tokenParts[secondPosition];

    const isAuthorize = await this.isAuthorize(token, request.baseUrl);

    if (!isAuthorize) {
      return response.json(unauthorizedResponse);
    }

    next();
  }

  async isAuthorize(token: string, baseUrl): Promise<boolean> {
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    const observable = this.httpService.post(
      `${process.env.DARK_XMERA_SECURITY_URL}${Routes.securityRoutes.permissions}`,
      { token },
      { httpsAgent: agent },
    );

    const { data: httpResponse } = await lastValueFrom(observable);

    if (httpResponse.error) {
      return false;
    }

    const containsModule = this.containsUrl(baseUrl, httpResponse.data.modules);

    if (!containsModule) {
      return false;
    }

    const containsScreen = this.containsUrl(baseUrl, httpResponse.data.screens);

    if (!containsScreen) {
      return false;
    }

    return true;
  }

  containsUrl(baseUrl: string, array: Array<any>): boolean {
    for (let index = 0; index < array.length; index++) {
      if (baseUrl.includes(array[index].url)) {
        return true;
      }
    }

    return false;
  }
}
