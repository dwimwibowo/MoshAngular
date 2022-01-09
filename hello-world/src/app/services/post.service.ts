import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = 'http://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) {

  }

  getPost(){
    return this.http.get(this.url);
  }

  createPost(data: any){
    return this.http.post(this.url, JSON.stringify(data));
  }

  updatePost(data: any){
    return this.http.patch(this.url + '/' + data.id, JSON.stringify({ isRead: true }))
  }

  deletePost(data: any){
    return this.http.delete(this.url + '/' + data.id);
  }
}