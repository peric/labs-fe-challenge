import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsItemComponent } from './posts-item.component';
import { SharedModule } from '../../shared/shared.module';
import { Post } from '../../models/post';

describe('PostsItemComponent', () => {
  let component: PostsItemComponent;
  let fixture: ComponentFixture<PostsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PostsItemComponent
      ],
      imports: [
        SharedModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsItemComponent);
    component = fixture.componentInstance;
  });

  it('post should be properly shown', () => {
    component.post = new Post(1, 1, 'First post', 'Awesome text');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('mat-card').length).toEqual(1);
    expect(fixture.nativeElement.querySelector('mat-card').querySelector('mat-card-title').innerText).toEqual('FIRST POST (#1)');
  });
});
