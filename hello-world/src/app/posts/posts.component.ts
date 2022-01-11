import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NotFoundError, throwError } from 'rxjs';
import { AppError } from '../common/errors/app-error';
import { BadInputError } from '../common/errors/bad-input-error';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: any[];
  form = new FormGroup({});

  constructor(private service: PostService) {

  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        (response: any) => {
          this.posts = response;
        }
      );
  }

  createPost(input: HTMLInputElement){
    let data: any = { title: input.value };
    
    this.service.create(data)
      .subscribe(
        (response: any) => {
          console.log(response);

          data.id = response.id;
          this.posts.splice(0, 0, data);

          input.value = '';
        },
        (error: AppError) => {
          if(error instanceof BadInputError)
            this.form.setErrors(error.originalError);
          else 
            throw error;
        }
      );
  }

  updatePost(input: HTMLInputElement) {
    let data: any = input.id;

    this.service.update(data)
      .subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: AppError) => {
          throw error;
        }
      );
  }

  deletePost(input: HTMLInputElement) {
    this.service.delete(input.id)
      .subscribe(
        (response: any) => {
          console.log(response);

          let index = this.posts.indexOf(input);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if(error instanceof NotFoundError)
            alert('This post has already been deleted');
          else {          
            throw error;
          }
        }
      );
  }
}
