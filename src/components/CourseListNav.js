import React, { Component } from 'react';

export default class CourseList extends Component{
    constructor(props) {super(props);}

    render(){
        return(
            <div>
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
                <div className="collapse navbar-collapse col-3" 
                    id="navbarTogglerDemo01">
                    <a className="navbar-brand" 
                    href="#">Course Manager</a>
                </div>
                <div>
                <div className="input-group mb-3">
                    <input type="text" 
                        className="form-control"
                        placeholder="New Course Name"
                        aria-label="Add new course" 
                        aria-describedby="basic-addon2"
                        size = '80' />
                    <div className="input-group-append">
                    <button className="btn btn-outline-success " 
                            type="submit">Add</button>
                    </div>
                </div>

        </div>
    </nav>

            </div>
        )
    }


}