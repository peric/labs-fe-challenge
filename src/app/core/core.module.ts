import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressBarModule } from '@angular/material';
import { ErrorHandler, NgModule } from '@angular/core';
import { ErrorsHandler } from './errors-handler';

@NgModule({
  declarations: [
    LoaderComponent,
  ],
  exports: [
    LoaderComponent,
    MatProgressBarModule,
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
  ],
  providers: [
    httpInterceptorProviders,
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    }
  ]
})
export class CoreModule {
}
