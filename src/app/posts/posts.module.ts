import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsItemComponent } from './posts-item/posts-item.component';
import { SharedModule } from '../shared/shared.module';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostsItemComponent,
  ],
  imports: [
    PostsRoutingModule,
    SharedModule
  ],
  providers: [
    PostsService,
  ]
})
export class PostsModule {
}
