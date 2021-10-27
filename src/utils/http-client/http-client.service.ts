import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as https from 'https';
import { lastValueFrom } from 'rxjs';
import { HttpResponse } from '../http-response';

@Injectable()
export class HttpClientService {
  constructor(private readonly httpService: HttpService) {
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    this.httpService.axiosRef.defaults.httpsAgent = agent;
  }

  setBaseUrl(baseUrl: string) {
    this.httpService.axiosRef.defaults.baseURL = baseUrl;
  }

  async get(route: string): Promise<HttpResponse<any>> {
    const observable = this.httpService.get(route);

    const { data } = await lastValueFrom(observable);

    return data;
  }

  async post(route: string, body: any): Promise<HttpResponse<any>> {
    const observable = this.httpService.post(route, body);

    const { data } = await lastValueFrom(observable);

    return data;
  }

  async put(route: string, body: any): Promise<HttpResponse<any>> {
    const observable = this.httpService.put(route, body);

    const { data } = await lastValueFrom(observable);

    return data;
  }

  async delete(route: string): Promise<HttpResponse<any>> {
    const observable = this.httpService.delete(route);

    const { data } = await lastValueFrom(observable);

    return data;
  }
}
