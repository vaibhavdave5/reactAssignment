import React from 'react';
import {Link} from "react-router-dom";

const CourseRow = ({course, owner, lastModified, deleteCourse}) =>
         
                    <tr>
                        <td><Link to={`/course/${course.id}`}>
                         <p><i className="fas fa-graduation-cap"></i> {course.title}</p></Link></td>
                        <td className="d-none d-sm-table-cell">{owner}</td>
                        <td className="d-none d-sm-table-cell">{lastModified}</td>
                        <td><button type="button"
                                    className="btn btn-danger"
                                    data-dismiss="alert"
                                    onClick={() => deleteCourse(course)}
                        >Delete</button></td>
                        <td><Link className="btn btn-primary" to={`/course/${course.id}`}>Edit</Link></td>
                    </tr>
export default CourseRow;