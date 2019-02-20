import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseGrid from '../containers/CourseGrid'
import CourseTable from '../containers/CourseTable'
import CourseService from '../services/CourseService'
import UserService from '../services/UserService'
import CourseEditor from "../containers/CourseEditor";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
class WhiteBoard extends Component {
  constructor() {
    super();
    this.courseService = new CourseService()
      this.userService = new UserService()
      this.state = {
          loggedIn:"no",
          showbutton: "no"
      }

      this.userService.getUser().
      then((response) => {
          console.log(response)
          if(response)
              this.setState({
                  user: response
              })
          this.changeRouteState()
      })

  }
  changeRouteState = () =>{
      this.courseService.findAllCourses().then(this.helpCRS)
  }

  helpCRS = (courses) =>{
      this.setState({
          courses:courses,
          loggedIn:"yes"
      })
  }
  deleteCourse = course =>
  {
      this.courseService.deleteCourse(course)
          .then(this.courseService.findAllCourses)
          .then(this.helpAddCourse)
  }


    login = (username, password) =>
    {
        this.userService.login(username,password)
            .then((user) => {
                if (user) {
                    this.setState({
                        "user": user
                    })
                    this.setState({
                        showbutton:"yes"
                    })
                }
                else{
                    alert("Incorrect user ID and password..<br/> Mock Username = John Password = Ford ")
                }
            });
    }

    register = (username, password, fname, lname) => {
        this.userService.register(username, password, fname, lname)
    }

  addCourse = (name) => {
      this.courseService.createCourse()
          .then(this.courseService.findAllCourses)
          .then(this.helpAddCourse)
  }
  helpAddCourse = (courses) => {
      this.setState({
          courses: courses
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
        { this.state.showbutton === "yes" &&
        <button id="changeState" onClick={this.changeRouteState}>View Courses</button> }
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
               />
               }
        />
        <Route path='/profile'
               render={() => <Profile
                   update={this.userService.update}
                   user={this.state.user}
               />
               }
        />



    </div>
</Router>

    )
  }
}

export default WhiteBoard;