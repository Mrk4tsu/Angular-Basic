import { Routes } from '@angular/router';
import {provideHttpClient, withInterceptors, withRequestsMadeViaParent} from '@angular/common/http';
import {LoggingInterceptor} from './users/logging.interceptor';

export const routes: Routes = [{
  path: 'user',
  providers: [
    provideHttpClient(
      withInterceptors([LoggingInterceptor]),
      withRequestsMadeViaParent()
    )
  ],
  loadComponent: () => import('./users/user/user.component').then(m => m.UserComponent)
}];
