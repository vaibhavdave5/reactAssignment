import React from 'react'
import CourseCard from './CourseCard'
import CourseListNav from './CourseListNav';

const CourseGrid = ({courses, deleteCourse, addCourse}) =>
  <div>
    <CourseListNav />
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
</div>
export default CourseGrid