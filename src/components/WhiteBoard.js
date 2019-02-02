import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from '../containers/CourseGrid'
import CourseTable from '../containers/CourseTable'
import CourseService from '../services/CourseService'
import CourseEditor from "../containers/CourseEditor";
class WhiteBoard extends Component {
  constructor() {
    super();
    this.courseService = new CourseService()
    this.state = {
      courses: this.courseService.findAllCourses()
    }
  }
  deleteCourse = course =>
    this.setState({
      courses: this.courseService.deleteCourse(course)
    })
  addCourse = (name) => {
      var course = {
          id: new Date().getTime(),
          title: name,
          modules: []

      }
      this.setState({
          courses: this.courseService.createCourse(course)
      })
  }
  render() {
    return (
       

<Router>
 <div>
   <Route path='/' exact
          render={() =>
            <CourseGrid
              addCourse={this.addCourse}
              deleteCourse={this.deleteCourse}
              courses={this.state.courses}/>}/>
   <Route path="/course/:id"
          exact
          component={CourseEditor}/>
   <Route path='/table'
          render={() => <CourseTable
                        courses={this.state.courses}
                        addCourse={this.addCourse}
                        deleteCourse={this.deleteCourse}
          />}/>
 </div>
</Router>
 
      
    )
  }
}

export default WhiteBoard;