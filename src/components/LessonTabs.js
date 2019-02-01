import React from 'react'


const LessonTabs = ({lesson, selectLesson, deleteLesson, updateLesson, lessonActive}) =>

    <div className="nav-item">
        <p className= {lessonActive(lesson)}>
            <h7 onClick={() => selectLesson(lesson)}>{lesson.title+" "}</h7>
            <i className="fas fa-edit" onClick={() => updateLesson(lesson)}></i>
                <i className="fas fa-trash" onClick={() => deleteLesson(lesson)}></i>
            </p>
    </div>
export default LessonTabs