import {HttpInterceptorFn} from '@angular/common/http';

export const LoggingInterceptor: HttpInterceptorFn = (request, next) => {
  console.log('Logging Interceptor');
  return next(request);
}
