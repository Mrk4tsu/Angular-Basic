import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private http = inject(HttpClient);
  data: any;

  getProductFetch() {
    this.http.get('https://localhost:5000/api/productpublics/list').subscribe((data: any)=>{
      this.data = data.resultObj;
    })
  }
}
