import { Error } from '../interfaces/error.interface';

export class HttpResponse<T> {
  private constructor(data: T, success: boolean, error: Error) {
    this.data = data;
    this.success = success;
    this.error = error;
  }

  data: T;
  success: boolean;
  error: Error;

  public static getSuccessResponse<T>(data: T): HttpResponse<T> {
    return new HttpResponse(data, true, null);
  }

  public static getFailedResponse<T>(
    errorMessage: string,
    errorCode: number = 500,
  ): HttpResponse<T> {
    const error = { errorMessage, errorCode };
    return new HttpResponse(null, false, error);
  }
}
