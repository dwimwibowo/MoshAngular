import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
    `,
    styles: []
})
export class CoursesComponent {

    title: string = "List of courses";
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    
    getTitle(){
        return this.title;
    }
}