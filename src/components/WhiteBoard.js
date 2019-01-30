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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="collapse navbar-collapse col-3" 
           id="navbarTogglerDemo01">
           <a className="navbar-brand" 
           href="#">Course Manager</a>
       </div>
       <div>
       <div className="input-group mb-3">
           <input type="text" 
               className="form-control"
               placeholder="New Course Name"
               aria-label="Add new course" 
               aria-describedby="basic-addon2"
               size = '80' />
           <div className="input-group-append">
           <button className="btn btn-outline-success " 
                   type="submit">Add</button>
           </div>
       </div>
</div>
</nav>

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