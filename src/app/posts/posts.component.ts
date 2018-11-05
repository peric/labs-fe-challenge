import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from '../models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  typeAll: string = 'all';
  typeEven: string = 'even';
  typeOdd: string = 'odd';
  types: Array<string> = [this.typeAll, this.typeEven, this.typeOdd];

  activeType: string = this.typeAll;

  posts: Post[];
  filteredPosts: Post[];

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const showType = params['show'];

      if (showType) {
        this.activeType = showType;
      }

      this.getPosts(this.activeType);
    });
  }

  refresh() {
    this.getPosts(this.activeType);

    // TODO: remove filteredPosts
    // TODO: refresh button + spinner - use only last value (Zip?), discard all the other

  }

  private filterPosts(type: string) {
    switch (type) {
      case this.typeEven:
        this.filteredPosts = this.posts.filter(post => post.id % 2 === 0);
        break;
      case this.typeOdd:
        this.filteredPosts = this.posts.filter(post => post.id % 2 === 1);
        break;
      default:
        this.filteredPosts = this.posts;
        break;
    }
  }

  private getPosts(type: string): void {
    if (this.types.indexOf(type) === -1) {
      throw new Error('That won\'t work! Only available types are: ' + this.types.map((value) => {
        return value;
      }));
    }

    this.postsService.getPosts()
      .subscribe(posts => {
        this.posts = posts;
        this.filterPosts(type);
      });
  }
}
