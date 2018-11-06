import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from '../models/post';
import { ActivatedRoute } from '@angular/router';
import { ConnectableObservable, fromEvent } from 'rxjs';
import { debounceTime, publish, switchMap } from 'rxjs/operators';

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

  posts: Post[] = [];
  filteredPosts: Post[] = [];

  constructor(private postsService: PostsService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const showType = params['show'];

      if (showType) {
        this.activeType = showType;
      }

      if (this.types.indexOf(this.activeType) === -1) {
        this.activeType = this.typeAll;
      }

      this.getPosts();
    });

    this.registerRefreshObservable();
  }

  private registerRefreshObservable() {
    const refreshButton = document.getElementById('refresh-button');

    const refreshButtonObservable = fromEvent(refreshButton, 'click')
      .pipe(
        debounceTime(500),
        switchMap(() => this.postsService.getPosts()),
        publish()
      ) as ConnectableObservable<Post[]>;

    refreshButtonObservable.subscribe((posts: Post[]) => {
      this.posts = posts;
      this.filteredPosts = this.getFilteredPosts(posts);
    });

    refreshButtonObservable.connect();
  }

  private getFilteredPosts(posts: Array<Post>): Array<Post> {
    let filteredPosts: Array<Post> = [];

    switch (this.activeType) {
      case this.typeEven:
        filteredPosts = posts.filter(post => post.id % 2 === 0);
        break;
      case this.typeOdd:
        filteredPosts = posts.filter(post => post.id % 2 === 1);
        break;
      default:
        filteredPosts = posts;
        break;
    }

    return filteredPosts;
  }

  private getPosts(): void {
    this.postsService.getPosts()
      .subscribe((posts) => {
        this.posts = posts;
        this.filteredPosts = this.getFilteredPosts(posts);
      });
  }
}
