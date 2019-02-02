import React from 'react'

const TopicPills = ({lesson, deleteTopic, editTopic, addTopic, selectTopic, selectTopicTheme}) =>

    <ul className="nav nav-pills navpad" >
      {
        lesson.topics.map(
            (topic) => {
              return(
                  <li className="nav-item navpad">
                    <p className={selectTopicTheme(topic)} onClick={()=>selectTopic(topic)}>{topic.title} <h7>   </h7>
                      <i className="fas fa-trash" onClick={() => deleteTopic(topic)}></i>
                      <i className="fas fa-edit" onClick={() => editTopic(topic)}></i>
                    </p>

                  </li>
              )
            }
        )
      }

      <li className="nav-item navpad">
        <i className=" nav-link btn-primary fa-2x fas fa-plus" onClick={addTopic}></i>
      </li>
    </ul>
export default TopicPills;