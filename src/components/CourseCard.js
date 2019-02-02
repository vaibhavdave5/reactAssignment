import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const CourseCard = ({course, deleteCourse}) =>
    <div className = "col-sm-12 col-md-4 col-lg-2">
        <div className="card mb-4">
            <img className="card-img-top"
                 src="https://picsum.photos/200/200"
                 alt="Card image cap"/>
            <div className="card-body">
                <Link to={`/course/${course.id}`}>
                    <h5 className="card-title">{course.title}</h5></Link>
                <Link className="btn btn-primary"
                      to={`/course/${course.id}`}>Edit</Link>
                <a onClick={() => deleteCourse(course)}
                   className="btn btn-danger">Delete</a>
            </div>
        </div>
    </div>
export default CourseCard;