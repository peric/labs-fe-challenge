import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    PostsModule
  ],
  providers: []
})
export class AppModule {
}
