import React, { Component } from 'react';
import CourseListNav from './CourseListNav'
import Courses from './Courses'
import CourseService from '../services/CourseService'



const CourseList = ({courses}) =>
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
                    {
                       courses.map(
                           course => <Courses courseName = {course.title}
                                              owner = "me"
                                              lastModified = "6:45"
                                      />

                       )
                    }
        
                </tbody>
            </table>
            </div>
        
    


export default CourseList;