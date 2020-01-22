import { Injectable, ErrorHandler } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class httpInterceptor implements HttpInterceptor {
  constructor(
    private spinner: NgxSpinnerService,
    ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = this.setHeaderEnvMode(request);
    this.spinner.show()
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.spinner.hide();
          if(event.body.response_code != 20000){
            
          }else{
            return event;
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.spinner.hide();
        let data = {};
        data = {
          status: error.status,
          message: error.message,
          headers: error.headers
        };
        return throwError(error);
      })
    );
  }

  setHeaderEnvMode(request) {
    if (localStorage.getItem("access_token")) {
      return request.clone({
        headers: request.headers
          .set("Content-Type", "application/json")
          .set(
            "Authorization",
            "Bearer " + localStorage.getItem("access_token")
          )
      });
    } else {
      return request.clone({
        headers: request.headers.set("Content-Type", "application/json"),
        withCredentials: true
      });
    }
  }
}
