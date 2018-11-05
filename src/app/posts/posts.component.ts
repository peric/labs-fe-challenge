import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from '../models/post';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const showType = params['show'];

      if (showType) {
        this.activeType = showType;
      }

      this.getPosts();
    });

    this.registerRefreshObservable();
  }

  private registerRefreshObservable() {
    const refreshButton = document.getElementById('refresh-button');

    fromEvent(refreshButton, 'click')
      .pipe(
        debounceTime(1000)
      )
      .subscribe(() => this.getPosts());
  }

  private filterPosts(posts: Array) {
    switch (this.activeType) {
      case this.typeEven:
        this.posts = posts.filter(post => post.id % 2 === 0);
        break;
      case this.typeOdd:
        this.posts = posts.filter(post => post.id % 2 === 1);
        break;
      default:
        this.posts = posts;
        break;
    }
  }

  private getPosts(): void {
    if (this.types.indexOf(this.activeType) === -1) {
      throw new Error('That won\'t work! Only available types are: ' + this.types.map((value) => {
        return value;
      }));
    }

    this.postsService.getPosts()
      .subscribe(posts => {
        this.filterPosts(posts);
      });
  }
}
