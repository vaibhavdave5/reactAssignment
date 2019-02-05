import courses from './courses.json'

class CourseService {
  constructor() {
    this.courses = courses;
    this.tempcourse = courses;
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

  findCourseById = courseId =>{
    this.courses = this.courses.find(
      course => course.id === courseId
    )
    return this.courses
  }

  findAllCourses = () =>{
   return this.courses;
  }

  deleteCourse = deleteCourse =>
    this.courses = this.courses.filter(
      course => course.id !== deleteCourse.id
    )

  updateCourse = (id, course) => {
    this.courses = this.tempcourse;
    console.log(this.courses.length);
    for (var i = 0; i < this.courses.length; i++) {
        if(id === this.courses[i].id){
          this.courses[i] = course;
          console.log("Executed");
        }
    }
  }


  // createWidget(topicId, widget)
  // creates a new widget instance for the topic whose ID is topicId
  // findWidgets(topicId)
  // retrieves all widgets for topic whose ID is topicId
  // findWidget(widgetId)
  // retrieves one widget object whose ID is widgetId
  // updateWidget(widgetId, widget)
  // updates one widget object whose ID is widgetId
  // deleteWidget(widgetId)
  // removes widget whose ID is widgetId

}
export default CourseService