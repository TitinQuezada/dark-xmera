import { HttpService } from '@nestjs/axios';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as https from 'https';
import { Routes } from 'src/routes/routes';
import { HttpResponse } from 'src/utils/http-response';

@Injectable()
export class PermissionsMiddleware implements NestMiddleware {
  constructor(private readonly httpService: HttpService) {}

  use(request: Request, response: Response, next: NextFunction) {
    const secondPosition = 1;
    const unauthorizedResponse = HttpResponse.getFailedResponse(
      'No tiene autorización',
      401,
    );
    const tokenParts = request.headers.authorization.split(' ');
    const token = tokenParts[secondPosition];

    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    this.httpService
      .post(
        `${process.env.DARK_XMERA_SECURITY_URL}${Routes.securityRoutes.permissions}`,
        { token },
        { httpsAgent: agent },
      )
      .subscribe(({ data: httpResponse }) => {
        if (httpResponse.error) {
          return response.json(unauthorizedResponse);
        }

        const containsModule = this.containsUrl(
          request.baseUrl,
          httpResponse.data.modules,
        );

        if (!containsModule) {
          return response.json(unauthorizedResponse);
        }

        const containsScreen = this.containsUrl(
          request.baseUrl,
          httpResponse.data.screens,
        );

        if (!containsScreen) {
          return response.json(unauthorizedResponse);
        }

        next();
      });
  }

  containsUrl(baseUrl: string, array: Array<any>): boolean {
    let containsUrl = false;

    for (let index = 0; index < array.length; index++) {
      if (baseUrl.includes(array[index].url)) {
        containsUrl = true;
        break;
      }
    }

    return containsUrl;
  }
}
