import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: any[];

  constructor(private service: PostService) {

  }

  ngOnInit(): void {
    this.service.getPost()
      .subscribe((response: any) => {
        this.posts = response;
      });
  }

  createPost(input: HTMLInputElement){
    let data: any = { title: input.value };
    
    this.service.createPost(data)
      .subscribe((response: any) => {
        console.log(response);

        data.id = response.id;
        this.posts.splice(0, 0, data);

        input.value = '';
      });
  }

  updatePost(input: HTMLInputElement) {
    let data: any = input.id;

    this.service.updatePost(data)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

  deletePost(input: HTMLInputElement) {
    this.service.deletePost(input.id)
      .subscribe((response: any) => {
        console.log(response);

        let index = this.posts.indexOf(input);
        this.posts.splice(index, 1);
      });
  }
}
