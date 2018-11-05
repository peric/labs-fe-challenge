import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListComponent } from './posts-list.component';
import { PostsItemComponent } from '../posts-item/posts-item.component';
import { SharedModule } from '../../shared/shared.module';
import { Post } from '../../models/post';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostsListComponent,
        PostsItemComponent
      ],
      imports: [
        SharedModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
  });

  it('posts should be properly rendered', () => {
    component.posts = [
      new Post(1, 1, 'First post', 'Awesome text'),
      new Post(2, 1, 'Second post', 'Awesome text')
    ];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('mat-card').length).toEqual(2);
  });
});
