import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CommandModule} from '@angular/cli/src/command-builder/command-module';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private http = inject(HttpClient)
  data: any

  getProduct() {
    this.http.get('https://localhost:5000/api/productmanages/paging').subscribe(response => {
      this.data = response;
    });
  }
}
