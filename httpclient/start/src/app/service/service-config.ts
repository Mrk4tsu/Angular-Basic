import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceConfig {
  constructor(private http: HttpClient) {}

  get(){
    return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/photos');
  }
}
export interface Product{
  id: number;
  title: string;
  thumbnailUrl: string;
  username: string;
  albumId: number;
}
