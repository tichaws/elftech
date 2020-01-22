import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class ErrorHandlerInterceptor extends ErrorHandler {
  constructor() {
    super();
  }

  handleError(error) {
  
  }
}
