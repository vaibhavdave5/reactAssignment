import React from "react";
import CourseEditor from "../containers/CourseEditor";


const CourseEditorNav = ({title}) =>
    <nav id="sidebar">
        <div className="sidebar-header">
            <h3>{title}</h3>
        </div>

        <ul className="list-unstyled components">
            <p>Modules</p>
            <div className="nav-link alert alert-dismissible alert-secondary">
                <button type="button" className="close " data-dismiss="alert">&times;</button>
                <a href="#" className="alert-link">Module 1</a>.
            </div>
            <div className="nav-link alert alert-dismissible alert-primary">
                <button type="button"
                        className="close"
                        data-dismiss="alert">&times;</button>
                <a href="#"
                   className="alert-link">Module 2</a>.
            </div>
            <div className="nav-link alert alert-dismissible alert-secondary">
                <button type="button"
                        className="close"
                        data-dismiss="alert">&times;</button>
                <a href="#"
                   className="alert-link">Module 3</a>.
            </div>
            <div className="nav-link alert alert-dismissible alert-secondary">
                <button type="button"
                        className="close"
                        data-dismiss="alert">&times;</button>
                <a href="#"
                   className="alert-link">Module 4</a>.
            </div>
            <div className="row">
                <div className="col-md-8"></div>

                <div className="col-md-4 float-right">
                    <button className="fa fa-plus"
                            aria-hidden="true"></button>
                </div>
            </div>
        </ul>
    </nav>
export default CourseEditorNav;

