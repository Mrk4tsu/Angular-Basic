import {Component, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JsonPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [
    JsonPipe,
    NgIf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private http = inject(HttpClient)
  data: any

  ngOnInit() {
    this.http.get('https://localhost:5000/api/productpublics/list').subscribe(response => {
      this.data = response;
    });
  }
}
