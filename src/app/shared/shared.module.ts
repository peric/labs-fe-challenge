import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule, MatCardModule, MatIconModule, MatProgressBarModule, MatTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LoaderComponent } from './loader/loader.component';
import { PostsService } from '../posts/posts.service';
import { LoaderService } from './loader/loader.service';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    NavComponent,
    LoaderComponent,
    CapitalizePipe,
    LoaderComponent
  ],
  exports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule,
    NavComponent,
    LoaderComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule,
  ],
  providers: [
    httpInterceptorProviders,
    LoaderService,
  ]
})
export class SharedModule {
}
