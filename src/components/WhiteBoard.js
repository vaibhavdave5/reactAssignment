import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from '../containers/CourseGrid'
import CourseTable from '../containers/CourseTable'
import CourseService from '../services/CourseService'
import CourseEditor from "../containers/CourseEditor";
import Login from "./Login";
class WhiteBoard extends Component {
  constructor() {
    super();
    this.courseService = new CourseService()
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
        var xyz = this;
        var data = JSON.stringify({
            "username": username.value,
            "password": password.value,
            "firstName": "",
            "lastName": "",
            "role": "",
            "courses": []
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                xyz.setState({
                    loggedIn:"yes"
                })
            }
        });

        xhr.open("POST", "https://damp-castle-92508.herokuapp.com/api/login");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "22b3028d-b6c8-4bb5-a334-a87626dbe19b");

        xhr.send(data);
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