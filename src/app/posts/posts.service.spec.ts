import { PostsService } from './posts.service';
import { Post } from '../models/post';
import { of } from 'rxjs';

describe('PostsService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let postsService: PostsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    postsService = new PostsService(<any> httpClientSpy);
  });

  it('getPosts should return expected posts', () => {
    const expectedPosts: Post[] =
      [
        new Post(1, 1, 'First post', 'My body is my temple'),
        new Post(2, 1, 'Second post', 'My body is my temple'),
      ];

    httpClientSpy.get.and.returnValue(of(expectedPosts));

    postsService.getPosts().subscribe(
      (posts) => {
        expect(posts.length).toBe(2);
        expect(posts[0].title).toEqual('First post');
        expect(posts[1].title).toEqual('Second post');
      },
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('getPost should return one expected post', () => {
    const expectedPost: Post = new Post(1, 1, 'First post', 'My body is my temple.');

    httpClientSpy.get.and.returnValue(of(expectedPost));

    postsService.getPost(1).subscribe(
      (post) => {
        console.log(post);
        expect(post.title).toEqual('First post');
      },
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
