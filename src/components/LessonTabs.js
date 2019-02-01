import React from 'react'


const LessonTabs = ({lesson}) =>
    <li className="nav-item">
        <a className="nav-link active"
           href="#">{lesson.title}</a></li>
export default LessonTabs