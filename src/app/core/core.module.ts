import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressBarModule } from '@angular/material';

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
    httpInterceptorProviders
  ]
})
export class CoreModule { }
