# REPOSITORY ANGULAR BASIC

> MRKATSU

### Http Client

- HTTP in Component:
- HTTP with Fetch:
    1. Fetch API là gì?
        - Fetch API là một interface (giao diện) được tích hợp sẵn trong trình duyệt, cho phép bạn thực hiện các yêu cầu
          HTTP (GET, POST, PUT, DELETE...) một cách linh hoạt.
        - Fetch sử dụng Promise để xử lý kết quả trả về từ server, giúp code dễ đọc và dễ bảo trì hơn so với cách dùng
          XMLHttpRequest truyền thống.
    2. Công dụng của Fetch API:
        - Fetch API được sử dụng để gửi yêu cầu HTTP đến server và nhận kết quả trả về.
        - Fetch API giúp bạn thực hiện các yêu cầu AJAX một cách dễ dàng và linh hoạt.
        - Fetch API giúp bạn thực hiện các yêu cầu CORS (Cross-Origin Resource Sharing) một cách dễ dàng.
- Functional vs DI-Based Interceptors:
    1. Interceptor là gi?
        - Interceptor trong Angular là một cơ chế cho phép bạn can thiệp và xử lý các request (yêu cầu) hoặc response (
          phản hồi) trước khi chúng được gửi hoặc nhận từ server. Nó hoạt động giống như một middleware trong HTTP
          request pipeline.
    2. Tác dụng của Interceptor:
        - **_Thêm Token Authorization vào Request_**: Khi gửi request, có thể tự động chèn JWT token vào headers mà
          không cần chỉnh sửa từng API call.
        - **_Xử lý Lỗi Toàn Cục (Global Error Handling)_**: Giúp bắt lỗi HTTP 4xx, 5xx và hiển thị thông báo lỗi một
          cách thống nhất.
        - **_Hiển thị Loading Spinner cho Request_**: Khi gọi API, có thể bật một spinner để báo hiệu cho người dùng
          rằng request đang được xử lý.
        - _**Ghi Log Request & Response**_: Có thể ghi lại toàn bộ request/response để debug.
          VD: Functional Interceptor

```typescript
import {HttpInterceptorFn} from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (request, next) => {
    const modifiedRequest = request.clone({
        setHeaders: {
            'Authorization': 'Bearer token'
        }
    });
    return next(modifiedRequest);
}
```

Cấu hình HttpClient với một hoặc nhiều Interceptor được cung cấp trực tiếp trong mảng

```typescript
provideHttpClient(withInterceptors([customInterceptor]))
```

VD: DI-Based Interceptor

```typescript
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
                'Authorization': 'Bearer token'
            }
        });
        return next.handle(modifiedRequest);
    }
}
```

Cấu hình HttpClient với Interceptors từ Dependency Injection (DI)

```typescript
provideHttpClient(withInterceptorsFromDi()),
    {
        provide: HTTP_INTERCEPTORS,
        useClass: customInterceptor,
        multi: true
    }
```

📌 Tóm gọn: Interceptor giúp bạn chặn, thay đổi, hoặc thêm logic vào tất cả các request và response trong ứng dụng
Angular.

- HttpParams & Object Literals
    1. HttpParams là gì?
        - HttpParams là một class trong Angular cung cấp các phương thức để xử lý query parameters của HTTP request.
        - HttpParams giúp bạn tạo ra một chuỗi query parameters dễ dàng và linh hoạt.
    2. Cách sử dụng HttpParams:
        - **_Tạo một HttpParams_**: Sử dụng phương thức `new HttpParams()` để tạo một instance của HttpParams.
        - **_Thêm một query parameter_**: Sử dụng phương thức `set()` để thêm một query parameter vào HttpParams.
        - **_Thêm nhiều query parameters_**: Sử dụng phương thức `append()` để thêm nhiều query parameters vào
          HttpParams.
        - **_Xóa một query parameter_**: Sử dụng phương thức `delete()` để xóa một query parameter khỏi HttpParams.
        - **_Lấy giá trị của một query parameter_**: Sử dụng phương thức `get()` để lấy giá trị của một query parameter.
        - **_Kiểm tra sự tồn tại của một query parameter_**: Sử dụng phương thức `has()` để kiểm tra xem một query
          parameter có tồn tại hay không.
        - **_Chuyển đổi HttpParams thành chuỗi_**: Sử dụng phương thức `toString()` để chuyển đổi HttpParams thành chuỗi
          query parameters.
    3. Ví dụ về HttpParams:
```typescript
  getProduct()
  {
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
```
![Screenshot 2025-02-05 201838](https://github.com/user-attachments/assets/765d4ad7-570b-4b34-9a0f-83c25b8f5558)

