import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
})
export class PostsListComponent implements OnInit {
  @Input() posts: Post[];

  constructor() {
  }

  ngOnInit() {
  }
}
