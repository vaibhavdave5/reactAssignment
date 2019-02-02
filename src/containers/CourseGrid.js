import React from 'react'
import CourseCard from '../components/CourseCard'
import CourseListNav from '../components/CourseListNav';

const CourseGrid = ({courses, deleteCourse, addCourse}) =>
  <div>
    <CourseListNav addCourse={addCourse}/>
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