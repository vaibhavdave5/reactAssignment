import React from 'react';
import CourseRow from './CourseRow'
import CourseListNav from './CourseListNav';

const CourseTable = ({courses, addCourse, deleteCourse}) =>
              <div>
            <CourseListNav addCourse={addCourse}/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th className="d-none d-sm-table-cell" 
                            scope="col">Owned by</th>
                        <th className="d-none d-sm-table-cell" 
                            scope="col">Last Modified</th>
                        	
                    </tr>
                </thead>
                
                <tbody> 
                    {
                       courses.map(
                           course => <CourseRow course = {course}
                                              owner = "me"
                                              lastModified = "6:45"
                                                deleteCourse={deleteCourse}

                                      />

                       )
                    }
        
                </tbody>
            </table>
            </div>
        
    


export default CourseTable;