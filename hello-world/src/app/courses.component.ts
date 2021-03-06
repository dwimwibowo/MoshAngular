import { Component } from '@angular/core';
import { Courses, CoursesService } from './services/courses.service';

@Component({
    selector: 'courses',
    templateUrl: 'courses.component.html',
    styles: []
})
export class CoursesComponent {

    title: string = "List of courses";
    courses: Courses[] = [];
    viewMode: string = "";
    canSave: boolean = true;

    task = {
        title: 'Review Application',
        assignee: {
            name: 'Dwi Marstya Wibowo',
            fullName: null
        }
    }

    constructor(private service: CoursesService) {
        
    }

    getTitle() {
        return this.title;
    }

    loadCourse(){
        this.courses = this.service.loadCourse();
        return this.courses;
    }

    onAdd() {
        this.courses = this.service.addCourses();
        return this.courses;
    }

    onRemove(c: Courses) {
        this.courses = this.service.delCourses(c);
        return this.courses;
    }

    trackCourse(index: number, course: Courses) {
        return course ? course.id : undefined;
    }
}