import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from '../containers/CourseGrid'
import CourseTable from '../containers/CourseTable'
import CourseService from '../services/CourseService'
import UserService from '../services/UserService'
import CourseEditor from "../containers/CourseEditor";
import Login from "./Login";
import Register from "./Register";
class WhiteBoard extends Component {
  constructor() {
    super();
    this.courseService = new CourseService()
      this.userService = new UserService()
    this.state = {
      courses: this.courseService.findAllCourses(),
        loggedIn:"no"
    }
  }
  deleteCourse = course =>
    this.setState({
      courses: this.courseService.deleteCourse(course)
    })
    login = (username, password) =>
    {
        this.userService.login(username,password)
    }

    register = (username, password) => {
        this.userService.register(username, password)
    }

  addCourse = (name) => {
      var course = {
          id: new Date().getTime(),
          title: name,
          "modules": [
              {
                  "id": new Date().getTime(),
                  "title": "jQuery",
                  "lessons": [
                      {
                          "id": new Date().getTime(),
                          "title": "Lesson 1",
                          "topics": [
                              {
                                  "id": new Date().getTime(),
                                  "title": "Topic 1"
                              }
                          ]
                      }]

          }]}
      this.setState({
          courses: this.courseService.createCourse(course)
      })
  }
  render() {
    return (
       

this.state.loggedIn === "no" &&
<Router>
    <div>
        <Route path='/' exact
               render={() =>
                   <Login doLogin={this.login} />}/>
        <Route path='/register' exact
               render={() =>
                   <Register doRegister={this.register} />}/>

    </div>
</Router>
||
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