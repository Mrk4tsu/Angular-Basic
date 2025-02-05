import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  private http = inject(HttpClient)
  data: any

  get() {
    const url = 'https://localhost:5000/api/productpublics/list';
    let httpParams = new HttpParams();
    httpParams = httpParams.set('KeyWord', '1');
    httpParams = httpParams.set('CategoryId', '1');
    const baseHeaders = new HttpHeaders().set('Custom-Header', 'Bearer token123');
    const updatedHeaders = baseHeaders.set('Custom-Header', 'Bearer new_token');

    this.http.get(url, {
      headers: updatedHeaders,
      params: httpParams
    }).subscribe(response => {
      this.data = response;
    });
  }

  getProduct() {
    let httpParams = new HttpParams();
    /*Ví dụ: Có 1 API lấy danh sách sản phẩm kèm filter
    api/productpublics/list?KeyWord=1&CategoryId=1&CategorySeoAlias=window&PageIndex=1&PageSize=10
    Tới đoạn này ta đang có 1 API với không có tham số truyền vào
     */
    let param1 = httpParams.set('KeyWord', '1'); // Thêm tham số KeyWord=1
    //Lúc này api sẽ là: api/productpublics/list?KeyWord=1
    let param2 = param1.set('CategoryId', '1'); // Thêm tham số CategoryId=1
    //lúc này api sẽ là: api/productpublics/list?KeyWord=1&CategoryId=1
    let param3 = param2.set('CategorySeoAlias', 'window'); // Thêm tham số CategorySeoAlias=window
    //lúc này api sẽ là: api/productpublics/list?KeyWord=1&CategoryId=1&CategorySeoAlias=window
    let param4 = param3.set('PageIndex', '1'); // Thêm tham số PageIndex=1
    //lúc này api sẽ là: api/productpublics/list?KeyWord=1&CategoryId=1&CategorySeoAlias=window&PageIndex=1
    let param5 = param4.set('PageSize', '10'); // Thêm tham số PageSize=10
    //lúc này api sẽ là: api/productpublics/list?KeyWord=1&CategoryId=1&CategorySeoAlias=window&PageIndex=1&PageSize=10
    //Nếu muốn thêm tham số nữa thì tiếp tục thêm như trên
    const params = {id: 10}
    this.http.get('https://localhost:5000/api/productpublics/list',
      {
        params: param5
      }).subscribe(response => {
      this.data = response;
    });
  }
}
