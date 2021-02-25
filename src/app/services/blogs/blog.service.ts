import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // Blogs url.
  //http://localhost:3000/blogs
  private blogUrl = "https://my-json-server.typicode.com/madhurgoyal1995/backend/blogs";

  constructor(private http: HttpClient) { }

  // Service to get available blogs list.
  getBlogsList() {
    return this.http.get<any>(this.blogUrl);
  }

  // Add a blog service.
  addBlog(data) {
    return this.http.post<any>(this.blogUrl, data);
  }

  // Service to delete a blog by passing id of the block to be deleted.
  deleteMyBlog(id): Observable<any> {
    return this.http.delete(`${this.blogUrl}/${id}`);
  }

  // Service to get blog data of passed id.
  getCurrentData(id): Observable<any> {
    return this.http.get(`${this.blogUrl}/${id}`);
  }

  // Service to update blog by passing id and data.
  updateMyBlog(id, data) {
    return this.http.put<any>(`${this.blogUrl}/${id}`, data);
  }
}
