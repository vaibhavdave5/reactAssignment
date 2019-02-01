import React from 'react'
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import CourseService from "../services/CourseService"
import CourseEditorNav from "./CourseEditorNav";
import WidgetList from "./WidgetList";

class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = new CourseService()
        const courseId = parseInt(props.match.params.id)
        const course = this.courseService.findCourseById(courseId)
        this.state = {
            course: course,
            title: course.title,
            module: course.modules[0],
            newModuleName: ""
        }
    }
    selectModule = module =>{
        this.setState({
            module: module
        })
    }

    deleteModule = deleteModule => {
        if(this.state.course.modules.length === 1){
            alert("You cannot delete the last Module");
        }
        else {
            var modules = this.state.course.modules.filter(
                module => module.id !== deleteModule.id
            )
            var newCourse = this.state.course;
            newCourse.modules = modules;
            this.setState({
                course: newCourse
            })
        }
    }

    addModule = btn => {
        var newModule = {
            "id": new Date().getTime(),
            "title": this.state.newModuleName,
            "lessons":[]
        }
        var newCourse = this.state.course;
        this.state.course.modules.push(newModule);
        this.setState({
            course: newCourse
        });
        this.courseService.updateCourse(this.state.course.id, this.state.course);
    }

    changeModuleName = btn => {
        this.setState({
            newModuleName: document.getElementById("newModule").value
        })
    }
    render() {
        return (
            <div>

                <div className="wrapper">
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>{this.state.course.title}</h3>
                        </div>

                        <ul className="list-unstyled components">
                            <p>Modules</p>
                            <div className="row">
                                <div className="col-md-8">
                                    <input type="text"
                                           id="newModule"
                                           placeholder="Add Module"
                                           className="form-control"
                                           onChange={this.changeModuleName}
                                    />
                                </div>

                                <div className="col-md-4 float-right">
                                    <button className="fa fa-2x fa-plus btn-primary"
                                            aria-hidden="true"
                                            onClick={this.addModule}
                                    ></button>
                                </div>

                            </div>
                            <br/>

                            <ModuleList course={this.state.course}
                                        selectModule ={this.selectModule}
                                        selectedModule = {this.state.module}
                                        delModule = {this.deleteModule}
                            />

                        </ul>
                    </nav>

                    />
                    <div id="content">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="collapse navbar-collapse"
                                 id="navbarColor01">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link"
                                           href="#">Built
                                            <span className="sr-only">(current)</span>
                                        </a></li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                           href="#">Pages</a></li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                           href="#">App</a></li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                           href="#">Store</a></li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                           href="#">Settings</a></li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <button className="btn btn-outline-success my-2 my-sm-0"
                                            type="submit">+</button>
                                </form>
                            </div>

                        </nav>

                        <div className="col-10 fixed-right">
                            <div className="row">
                                <ul className="nav nav-tabs">
                                    {
                                        this.state.course.modules[0].lessons.map(
                                            (lesson) => {
                                                return (
                                                    <LessonTabs
                                                        lesson={lesson}/>
                                                )
                                            }
                                        )
                                    }
                                    <li className="nav-item">
                                        <a className="nav-link"
                                           href="#">+</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <TopicPills/>
                        </div>
                        <div className="row">
                            <div className="col-8"></div>
                            <div className="col-4">
                                <button type="button"
                                        className="btn btn-success"
                                        data-toggle="button"
                                        autocomplete="off">Save</button>
                                <button type="button"
                                        className="btn btn-primary"
                                        data-toggle="button"
                                        aria-pressed="false"
                                        autocomplete="off">Preview</button>
                                <button type="button"
                                        className="btn btn-warning"
                                        data-toggle="button"
                                        aria-pressed="false"
                                        autocomplete="off">Add Widget</button>
                            </div>
                        </div>
                        <br />
                        <WidgetList/>
                    </div>
                </div>
            </div>
        )
    }
}
export default CourseEditor