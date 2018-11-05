import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
})
export class PostsItemComponent implements OnInit {
  @Input() post: Post;

  constructor() {
  }

  ngOnInit() {
  }
}
