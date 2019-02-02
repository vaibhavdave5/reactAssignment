import React from 'react';

const CourseRow = ({courseName, owner, lastModified}) =>
         
                    <tr>
                        <td><a href="/course-editor/course-editor.template.client.html">
                         <p><i className="fas fa-graduation-cap"></i> {courseName}</p></a></td>
                        <td className="d-none d-sm-table-cell">{owner}</td>
                        <td className="d-none d-sm-table-cell">{lastModified}</td>
                        <td><button type="button" 
                                    className="close" 
                                    data-dismiss="alert">&times;</button></td>
                    </tr>
export default CourseRow;