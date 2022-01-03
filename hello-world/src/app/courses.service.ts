export class CoursesService {

  courses: string[] = ["course111","course222","course333"];

  constructor() { }

  getCourses(){
    return this.courses;
  }

}
