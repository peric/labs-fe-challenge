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

@NgModule({
  declarations: [
    NavComponent,
    CapitalizePipe
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
})
export class SharedModule {
}
