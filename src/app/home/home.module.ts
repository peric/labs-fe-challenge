import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeMessageComponent,
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
