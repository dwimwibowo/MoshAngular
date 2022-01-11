import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AppError } from '../common/errors/app-error';
import { BadInputError } from '../common/errors/bad-input-error';
import { NotFoundError } from '../common/errors/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {

  }

  getAll(){
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  create(resource: any){
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource: any){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id: string){
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response){
    console.log('Handling error locally and rethrowing it...', error);

    if(error.status === 400)
      return throwError(new BadInputError());
    else if(error.status === 404)
      return throwError(new NotFoundError());
    else
      return throwError(new AppError(error.json()));
  }
}