import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <h2 [textContent]="title"></h2>

        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
        
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />

        <table border="1">
            <tr>
                <td [attr.colspan]="colSpan">
                    Table Courses
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
        </table>

        <button class="btn btn-primary">Save</button>
    `,
    styles: []
})
export class CoursesComponent {

    title: string = "List of courses";
    imageUrl: string = "http://picsum.photos/400/200";
    colSpan: number = 2;
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    
    getTitle(){
        return this.title;
    }
}