import {Component, inject} from '@angular/core';
import {ServiceConfig} from '../service/service-config';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [
    AsyncPipe
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  configServer = inject(ServiceConfig)

  product$ = this.configServer.get();
}
