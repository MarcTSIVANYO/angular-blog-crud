import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  private baseUrl = "http://localhost/covid-innov/api/blogs";
  constructor(private http: HttpClient) { }
  

  getBlog(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/read_one.php?id=${id}`);
  }

  createBlog(blog: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create.php`, blog);
  }

  updateBlog(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update.php?id=${id}`, value);
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete.php?id=${id}`, { responseType: 'text' });
  }

  getBlogsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/read.php`);
  }
}