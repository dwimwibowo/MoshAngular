import { Component } from '@angular/core';

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
    courses: string[] = ["course1","course2","course3"];

    getTitle(){
        return this.title;
    }
}