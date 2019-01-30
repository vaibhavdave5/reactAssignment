import React from 'react'
import CourseCard from './CourseCard'

const CourseGrid = ({courses, deleteCourse, addCourse}) =>
  <div className="row">
    {
        courses.map(course =>
          <CourseCard
            deleteCourse={deleteCourse}
            course={course}
            key={course.id}/>
        )
    }
    
  </div>

export default CourseGrid