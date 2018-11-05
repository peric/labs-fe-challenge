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
import { LoaderService } from '../core/loader/loader.service';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    NavComponent,
    CapitalizePipe,
  ],
  exports: [
    BrowserAnimationsModule,
    CoreModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
    NavComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
  ],
  providers: [
    LoaderService,
  ]
})
export class SharedModule {
}
