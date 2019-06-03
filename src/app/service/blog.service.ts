import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, take, map } from 'rxjs/operators'

import { UploadBlog, UploadBlogResponse } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  upload(blog:UploadBlog): Observable<UploadBlogResponse>{
    return this.http.post<UploadBlogResponse>('upload/song', blog).pipe(
      retry(2), take(1)
    );
  }

}
