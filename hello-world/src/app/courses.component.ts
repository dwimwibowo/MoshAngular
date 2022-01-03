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

        <button class="btn btn-primary" [class.active]="isActive">Class Binding</button>
        <button class="btn btn-danger" [style.backgroundColor]="isActive ? 'blue' : 'white'">Style Binding</button>
        <button class="btn btn-secondary">Normal</button>
        <div (click)="onDivClicked()">
            <button class="btn btn-warning" (click)="onSave($event)">Event Binding</button>
        </div>
        <input (keyup)="onKeyUp($event)" />
        <input (keyup.enter)="onKeyUpEnter()" />
        <input (keyup.enter)="onKeyUpEnterValue($event)" />
        <input #email (keyup.enter)="onKeyUpEnterValueVariable(email.value)" />
        <input [(ngModel)]="emailVar" (keyup.enter)="onKeyUpEnterValueVariableBinding()" />
    `,
    styles: []
})
export class CoursesComponent {

    title: string = "List of courses";
    imageUrl: string = "http://picsum.photos/400/200";
    colSpan: number = 2;
    isActive: boolean = true;
    courses;
    emailVar: string = "me@example.com";

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    
    getTitle(){
        return this.title;
    }

    onDivClicked(){
        console.log("Div was clicked");
    }

    onSave($event: any){
        $event.stopPropagation();

        console.log("Button was clicked", $event);
        alert("Button was clicked");
    }

    onKeyUp($event: any){
        if($event.keyCode === 13)
            console.log("Enter key pressed");
    }

    onKeyUpEnter(){
        console.log("Enter key pressed");
    }

    onKeyUpEnterValue($event: any){
        console.log($event.target.value);
    }

    onKeyUpEnterValueVariable(email: any){
        console.log(email);
    }

    onKeyUpEnterValueVariableBinding(){
        console.log(this.emailVar);
    }
}