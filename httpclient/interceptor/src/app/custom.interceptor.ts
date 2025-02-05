// import {HttpInterceptorFn} from '@angular/common/http';
//
// export const customInterceptor: HttpInterceptorFn = (request, next) => {
//   const modifiedRequest = request.clone({
//     setHeaders: {
//       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwiRnVsbE5hbWUiOiJNckthdHN1IiwiQXZhdGFyIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGplM3NlYXFqL2ltYWdlL3VwbG9hZC92MTczNzI2OTAxNC9hdmF0YXIuanBnIiwiUm9sZSI6IkFkbWluIiwiZXhwIjoxNzM4NzQ3ODE5LCJpc3MiOiJ3d3cubXJrYXRzdS5pby52biIsImF1ZCI6Ind3dy5tcmthdHN1LmlvLnZuIn0.ZX9xxasMi7745RKffuEltarGHdOV-L2nRaEvkXih-_8'
//     }
//   });
//   return next(modifiedRequest);
// }

import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class customInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({
      setHeaders: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwiRnVsbE5hbWUiOiJNckthdHN1IiwiQXZhdGFyIjoiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGplM3NlYXFqL2ltYWdlL3VwbG9hZC92MTczNzI2OTAxNC9hdmF0YXIuanBnIiwiUm9sZSI6IkFkbWluIiwiZXhwIjoxNzM4NzQ5NDgyLCJpc3MiOiJ3d3cubXJrYXRzdS5pby52biIsImF1ZCI6Ind3dy5tcmthdHN1LmlvLnZuIn0.K2rK-qJAYvmRu8Zgz67Sa5GoBNi8vHA2r9hj0tPBqbg'
      }
    });
    return next.handle(modifiedRequest);
  }
}
