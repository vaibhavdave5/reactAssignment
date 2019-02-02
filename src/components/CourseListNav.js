import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import CourseService from "../services/CourseService";
export default class CourseList extends Component{
    constructor(props) {
        super(props)
        this.courseService = new CourseService()

        this.state={
            courseList: 'none',
            courseGrid: ''
        }
    }


    handleClick = () =>
    {
        var parts = window.location.href.split('/');
        var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
        console.log(lastSegment)

        if(lastSegment ==='table'){
            this.setState({
                courseList: 'none',
                courseGrid: ''
            })
        }
        else{
            this.setState({
                courseList: '',
                courseGrid: 'none'
            })
        }
    }

    render(){
        return(
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
                                   id="courseName"
                                   className="form-control"
                                   placeholder="New Course Name"
                                   aria-label="Add new course"
                                   aria-describedby="basic-addon2"
                                   size = '80' />
                            <div className="input-group-append">
                                <button className="btn btn-outline-success "
                                         onClick={() =>this.props.addCourse(document.getElementById("courseName").value)}>Add</button>
                            </div>
                        </div>

                    </div>
                </nav>

                <div style={{display: this.state.courseGrid}}>
                    <Link onClick={this.handleClick} to="/">
                        Course Grid</Link></div>
                <div style={{display: this.state.courseList}} >
                    <Link to="/table" onClick={this.handleClick}>Course Table</Link></div>
            </div>
        )
    }
}