# REPOSITORY ANGULAR BASIC
> MRKATSU
### 1. Component
### 2. Form
- Reactive Forms & Template-Driven Forms
- Reactive Forms Data Flow View To Model
- Template-Driven Data Flow
- Reactive vs Template-Driven: Data Model Mutability
- Reactive Form Testing Model-To-View & View-To-Model Flow
- Reactive Form Controlls
- FormGroup & Form Controll
- Nested Form Groups
- FormBuilder & Form Validation
- Dynamic Form Using Form-Array
- 
### 3. Routing
### 4. Http Client
- HTTP in Component:
- HTTP with Fetch:
  1. Fetch API là gì?
     - Fetch API là một interface (giao diện) được tích hợp sẵn trong trình duyệt, cho phép bạn thực hiện các yêu cầu HTTP (GET, POST, PUT, DELETE...) một cách linh hoạt.
     - Fetch sử dụng Promise để xử lý kết quả trả về từ server, giúp code dễ đọc và dễ bảo trì hơn so với cách dùng XMLHttpRequest truyền thống.
  2. Công dụng của Fetch API:
     - Fetch API được sử dụng để gửi yêu cầu HTTP đến server và nhận kết quả trả về.
     - Fetch API giúp bạn thực hiện các yêu cầu AJAX một cách dễ dàng và linh hoạt.
     - Fetch API giúp bạn thực hiện các yêu cầu CORS (Cross-Origin Resource Sharing) một cách dễ dàng.
- Functional vs DI-Based Interceptors:
  1. Interceptor là gi?
     - Interceptor trong Angular là một cơ chế cho phép bạn can thiệp và xử lý các request (yêu cầu) hoặc response (phản hồi) trước khi chúng được gửi hoặc nhận từ server. Nó hoạt động giống như một middleware trong HTTP request pipeline.
  2. Tác dụng của Interceptor:
     - **_Thêm Token Authorization vào Request_**: Khi gửi request, có thể tự động chèn JWT token vào headers mà không cần chỉnh sửa từng API call.
     - **_Xử lý Lỗi Toàn Cục (Global Error Handling)_**: Giúp bắt lỗi HTTP 4xx, 5xx và hiển thị thông báo lỗi một cách thống nhất.
     - **_Hiển thị Loading Spinner cho Request_**: Khi gọi API, có thể bật một spinner để báo hiệu cho người dùng rằng request đang được xử lý.
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

📌 Tóm gọn: Interceptor giúp bạn chặn, thay đổi, hoặc thêm logic vào tất cả các request và response trong ứng dụng Angular.  
- Fetch JSon, Images & More with Responsetype Magic
- Url Params With HTTPParams & Object Literals
- HTTP Request with Custom Paramcodec
- Immutable HttpReaders
- HTTPClient Observe
- File Upload
- File Upload With Progress
- Fix Http Failures With Rxjs
- Catch Error and Retry Request
- 
### 5. SSR
