import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        map( response => {
          return response.map((post) => {
            return new Post(post.id, post.userId, post.title, post.body);
          });
        }),
        catchError(this.handleError('getPosts', []))
      );
  }

  // TODO: copy handleError

  // TODO: debounce requests

  getPost(id: number) {
    return this.http.get<Post[]>(`${this.postsUrl}/${id}`)
      .pipe(
        catchError(this.handleError('getPost', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: external helper for logs

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
