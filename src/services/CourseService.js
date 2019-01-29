import courses from './courses.json'
class CourseService {
  constructor() {
    this.courses = courses;
    this.tempcourse = "";
  }
  createCourse = course => {
    if(course === null) {
      course = {
        id: (new Date()).getTime(),
        title: 'New Course'
      }
    }
    this.courses.push(course)
    return this.courses
  }
  findCourseById = courseId =>
    this.courses = this.courses.find(
      course => course.id === courseId
    )
  findAllCourses = () =>
    this.courses;
  deleteCourse = deleteCourse =>
    this.courses = this.courses.filter(
      course => course.id !== deleteCourse.id
    )
   updateCourse = (id, course) =>
      this.deleteCourse(id)
      this.courses.push(course)
}
export default CourseService