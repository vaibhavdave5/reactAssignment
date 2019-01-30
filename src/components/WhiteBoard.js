import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from './CourseGrid'
import CourseList from './CourseList'
import CourseService from '../services/CourseService'
import CourseEditor from "./CourseEditor";
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
  addCourse = () =>
    this.setState({
      courses: this.courseService.addCourse(null)
    })
  render() {
    return (
      <div>
        <h1>White Board</h1>
        <Router>
          <div>
            <Link to="/">Course Grid</Link> |
            <Link to="/table">Course Table</Link>
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
                   render={() => <CourseList courses={this.state.courses}/>}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default WhiteBoard;