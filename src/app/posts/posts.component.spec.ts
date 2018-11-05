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
  queryParams: Observable<Params> = of({ show: 'odd' });
}

class PostsServiceMock {
  getPosts(): Observable<Post[]> {
    return of([
      new Post(1, 1, 'First post', 'Awesome text'),
      new Post(2, 1, 'Second post', 'Awesome text'),
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

  it('default active type should be set to all', () => {
    expect(component.activeType).toEqual('all');
  });

  it('should load only odd posts after Angular calls ngOnInit', () => {
    expect(component.posts.length).toEqual(0);
    component.ngOnInit();
    expect(component.activeType).toEqual('odd');
    expect(component.posts.length).toEqual(1);
    expect(component.posts[0].title).toEqual('First post');
  });

  it('Posts should be refreshed after one second of peace', fakeAsync(() => {
    fixture.detectChanges();

    const refreshButton = fixture.nativeElement.querySelector('#refresh-button');
    component.posts = [];

    refreshButton.click();
    tick(100);
    refreshButton.click();
    tick(100);
    refreshButton.click();

    expect(component.posts.length).toEqual(0);
    tick(1000);
    expect(component.posts.length).toEqual(1);
  }));
});
