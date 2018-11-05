import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(private injector: Injector) {
  }

  handleError(error: any) {
    const router = this.injector.get(Router);

    console.error('An error occurred:', error);
    console.error('Url: ', router.url);
  }
}
