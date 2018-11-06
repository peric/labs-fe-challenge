import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { SharedModule } from '../shared/shared.module';
import { PostsItemComponent } from './posts-item/posts-item.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { PostsService } from './posts.service';
import { Post } from '../models/post';

class ActivatedRouteMock {
  url: string = '/posts';
  queryParams: Observable<Params> = of({ show: 'wrong' });
}

class PostsServiceMock {
  getPosts(): Observable<Post[]> {
    return of([
      new Post(1, 1, 'First post', 'Awesome text'),
      new Post(2, 11, 'Second post', 'Awesome text'),
    ]);
  }
}

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostsComponent,
        PostsListComponent,
        PostsItemComponent
      ],
      imports: [
        SharedModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteMock },
        { provide: PostsService, useClass: PostsServiceMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  it('should load all posts if wrong parameter is received', () => {
    expect(component.activeType).toEqual('all');
    expect(component.posts.length).toEqual(0);
    fixture.detectChanges();
    expect(component.activeType).toEqual('all');
    expect(component.posts.length).toEqual(2);
    expect(component.filteredPosts.length).toEqual(2);
    expect(component.filteredPosts[0].title).toEqual('First post');
  });

  it('posts should be refreshed after one second of peace', fakeAsync(() => {
    fixture.detectChanges();
    const refreshButton = fixture.nativeElement.querySelector('#refresh-button');
    component.posts = [];
    component.filteredPosts = [];
    refreshButton.click();
    tick(100);
    refreshButton.click();
    tick(100);
    refreshButton.click();
    tick(500);
    fixture.detectChanges();
    expect(component.posts.length).toEqual(2);
    expect(component.filteredPosts.length).toEqual(2);
  }));

  it('should change activeType and refresh proper posts', fakeAsync(() => {
    fixture.detectChanges();

    const refreshButton = fixture.nativeElement.querySelector('#refresh-button');


    component.activeType = 'odd';
    refreshButton.click();
    tick(500);
    fixture.detectChanges();

    expect(component.posts.length).toEqual(2);
    expect(component.filteredPosts.length).toEqual(1);
    expect(component.filteredPosts[0].title).toEqual('First post');

    component.activeType = 'even';
    refreshButton.click();
    tick(500);
    fixture.detectChanges();

    expect(component.posts.length).toEqual(2);
    expect(component.filteredPosts.length).toEqual(1);
    expect(component.filteredPosts[0].title).toEqual('Second post');

    component.activeType = 'all';
    refreshButton.click();
    tick(500);
    fixture.detectChanges();

    expect(component.posts.length).toEqual(2);
    expect(component.filteredPosts.length).toEqual(2);
    expect(component.filteredPosts[0].title).toEqual('First post');
  }));
});
