import React from 'react'

export default class TopicPills
  extends React.Component {
  render() {
    return(
        <ul className="nav nav-pills navpad" >
          <li className="nav-item navpad"><a
              className="nav-link active"
              href="#">Topic 1</a></li>
          <li className="nav-item navpad"><a
              className="nav-link btn btn-light"
              href="#">Topic 2</a></li>
          <li className="nav-item navpad" ><a
              className="nav-link btn btn-light"
              href="#">Topic 3</a></li>
          <li className="nav-item navpad"><a
              className="nav-link btn btn-light"
              href="#">+</a></li>
        </ul>
    );}}
