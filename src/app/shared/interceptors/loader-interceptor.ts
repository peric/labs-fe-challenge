import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next
      .handle(req)
      .pipe(
        finalize(() => {
          // I did this just that I can show that fancy loader on the top
          setTimeout(() => this.loaderService.hide(), 500);
        })
      );
  }
}
