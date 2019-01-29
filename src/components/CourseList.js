import React, { Component } from 'react';
import CourseListNav from './CourseListNav'
import Courses from './Courses'

class CourseList extends Component{
    constructor(props) {super(props);}

    render(){
        return(
            <div>
                <CourseListNav/>
        
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th className="d-none d-sm-table-cell" 
                            scope="col">Owned by</th>
                        <th className="d-none d-sm-table-cell" 
                            scope="col">Last Modified</th>
                        <th scope="col">
                            <button className="fa fa-table" 
                                     styles={{"font-size": '24px'}}
                            >
                            </button>
                        </th>	
                    </tr>
                </thead>
                
                <tbody>
                    <Courses courseName="CS 5511" owner="me" lastModified="6:34"/>
                    
                    <tr>
        
                        <td><a href="/course-editor/course-editor.template.client.html">
                        <p><i className="fas fa-graduation-cap"></i> CS5500 Software Engineering</p></a></td>
                        <td className="d-none d-sm-table-cell">me</td>
                        <td className="d-none d-sm-table-cell">6:45 PM</td>
                        <td><button type="button" 
                                    className="close" 
                                    data-dismiss="alert">&times;</button></td>
                    </tr>
                    <tr>
                        <td><a href="/course-editor/course-editor.template.client.html">
                        <p><i className="fas fa-graduation-cap"></i> CS5500 Software Engineering</p></a></td>
                        <td className="d-none d-sm-table-cell">me</td>
                        <td className="d-none d-sm-table-cell">6:45 PM</td>
                        <td><button type="button" 
                                    className="close" 
                                    data-dismiss="alert">&times;</button></td>
                    </tr>
                    <tr>
                        <td>Yesterday</td>
                    </tr>
                    <tr>
        
                        <td><a href="/course-editor/course-editor.template.client.html">
                            <p><i className="fas fa-graduation-cap"></i> CS5500 Software Engineering</p></a></td>
                        <td className="d-none d-sm-table-cell">me</td>
                        <td className="d-none d-sm-table-cell">May, 24</td>
                        <td><button type="button" 
                                    className="close"
                                    data-dismiss="alert">&times;</button></td>
                    </tr>
                    <tr>
        
                        <td><a href="/course-editor/course-editor.template.client.html">
                            <p><i className="fas fa-graduation-cap"></i> CS5500 Software Engineering</p></a></td>
                        <td className="d-none d-sm-table-cell">me</td>
                        <td className="d-none d-sm-table-cell">May, 24</td>
                        <td><button type="button" 
                                    className="close" 
                                    data-dismiss="alert">&times;</button></td>
                    </tr>
                    <tr>
        
                        <td><a href="/course-editor/course-editor.template.client.html">
                            <p><i className="fas fa-graduation-cap"></i> CS5500 Software Engineering</p></a></td>
                        <td className="d-none d-sm-table-cell">me</td>
                        <td className="d-none d-sm-table-cell">May, 24</td>
                        <td><button type="button" 
                                    className="close" 
                                    data-dismiss="alert">&times;</button></td>
                    </tr>
        
                    <tr>
                        <td>Previous 7 days</td>
                    </tr>
                    <tr>
        
                        <td><a href="/course-editor/course-editor.template.client.html">
                        <p><i className="fas fa-graduation-cap"></i> CS5500 Software Engineering</p></a></td>
                        <td className="d-none d-sm-table-cell">me</td>
                        <td className="d-none d-sm-table-cell">May, 20</td>
                        <td><button type="button" 
                                    className="close" 
                                    data-dismiss="alert">&times;</button></td>
                    </tr>
        
                </tbody>
            </table>
            </div>
        )
    }
}

export default CourseList;