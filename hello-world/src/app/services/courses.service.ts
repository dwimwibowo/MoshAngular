export class CoursesService {

  private courses: Courses[] = [];

  constructor() {

  }

  loadCourse() {    
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' }
    ];

    return this.courses;
  }

  getCourses(){
    return this.courses;
  }

  addCourses() {
      let lastId: number = (this.courses.length > 0) ? this.courses.length + 1 : 1;
      
      for(var i = 1; i <= this.courses.length; i++) {
        let course =  this.courses.find(x => x.id === i);
        if(!course) {
          lastId = i;
          break;
        }
      }

      let lastName: string = 'course' + lastId.toString();

      this.courses.push (
          {
              id: lastId,
              name: lastName
          }
      );
      
      return this.courses.sort((a, b) => a.id - b.id);
  }

  delCourses(c: Courses) {
      let index = this.courses.indexOf(c);
      this.courses.splice(index, 1);

      return this.courses;
  }
}

export interface Courses {
  id: number,
  name: string
}