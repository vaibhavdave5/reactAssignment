import React from 'react';
import {Link} from "react-router-dom";

const CourseRow = ({course, owner, lastModified, deleteCourse}) =>
         
                    <tr>
                        <td><a href="/course-editor/course-editor.template.client.html">
                         <p><i className="fas fa-graduation-cap"></i> {course.title}</p></a></td>
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