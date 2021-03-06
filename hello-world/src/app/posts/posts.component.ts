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
        posts => {
          this.posts = posts;
        }
      );
  }

  createPost(input: HTMLInputElement){
    let data: any = { title: input.value };
    this.posts.splice(0, 0, data);

    input.value = '';
    
    this.service.create(data)
      .subscribe(
        (newPost: any) => {
          console.log(newPost);

          data.id = newPost.id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

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
        updatedPost => {
          console.log(updatedPost);
        },
        (error: AppError) => {
          throw error;
        }
      );
  }

  deletePost(input: HTMLInputElement) {
    let index = this.posts.indexOf(input);
    this.posts.splice(index, 1);

    this.service.delete(input.id)
      .subscribe(
        () => null,
        (error: AppError) => {
          this.posts.splice(index, 0, input);

          if(error instanceof NotFoundError)
            alert('This post has already been deleted');
          else {          
            throw error;
          }
        }
      );
  }
}
