import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import CourseService from "../services/CourseService"
import WidgetListContainer from '../containers/WidgetListContainer'
import widgetReducer from '../reducers/WidgetReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import courses from '../services/courses.json'


const store = createStore(widgetReducer);


class CourseEditor extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = new CourseService()
        const courseId = parseInt(props.match.params.id)
        this.state = {
            course: courses[0],
            title: courses[0].title,
            module: courses[0].modules[0],
            lesson: courses[0].modules[0].lessons[0],
            topic: courses[0].modules[0].lessons[0].topics[0],
            newModuleName: "",
            widgets: courses[0].modules[0].lessons[0].topics[0].widgets,
            lessons:courses[0].modules[0].lessons
        }
        this.courseService.findCourseById(courseId)
            .then( (course) => {
                    this.setState({
                        course: course,
                        title: course.title,
                        module: course.modules[0],
                        lessons:course.modules[0].lessons,
                        lesson: course.modules[0].lessons[0],
                        topic: course.modules[0].lessons[0].topics[0],
                        newModuleName: "",
                    });
                console.log(this.state.course);
                }
            )
    }
    selectModule = module =>{
        this.setState({
            module: module
        })
        this.setState({
            lesson: module.lessons[0]
        })
    }

    selectTopicTheme = topic =>{
        if(topic.id === this.state.topic.id){
            return "nav-link active"
        }
        return "nav-link"
    }

    selectLesson = lesson =>{
        this.setState({
            lesson: lesson
        })
    }

    deleteTopic = deletetopic =>{

        var topics = this.state.lesson.topics.filter(
            topic => deletetopic.id !== topic.id
        )
        var newLesson = this.state.lesson;
        newLesson.topics = topics;
        this.setState({
            lesson: newLesson
        })
    }

    moduleColor = (module) => {
        if(module.id === this.state.module.id){
            return "nav-link alert alert-dismissible alert-danger";
        }
        return "nav-link alert alert-dismissible alert-primary";
    }

    selectTopic = selectedtopic =>{
        this.setState({
            topic: selectedtopic,

        })
        this.setState({
            widgets: selectedtopic.widgets,
        })
    }

    editTopic = topic =>{
        var txt;
        var name = prompt("Please enter your new Topic Name:", "");
        if (name == null || name == "") {
            alert("User cancelled the prompt.");
        } else {
            txt =  name ;
            var newTopic = this.state.lesson.topics;
            for (var i = 0; i < newTopic.length; i++) {
                if(topic.id === newTopic[i].id){
                    newTopic[i].title = txt;
                }
            }
            var newLesson = this.state.lesson;
            newLesson.topics = newTopic;
            this.setState({
                lesson: newLesson
            })
        }

    }

    addTopic = () => {
        var newTopic = {
            "id": new Date().getTime(),
            "title": "New Topic",
            "widgets" :[]
        }
        var newLesson = this.state.lesson;

        newLesson.topics.push(newTopic);
        this.setState({
            lesson: newLesson
        });
    }

    lessonActive = lesson =>{
        if(lesson.id === this.state.lesson.id){
            return "active nav-link";
        }
        else {
            return "nav-link"
        }
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


    deleteLesson = deleteLesson => {
        if(this.state.module.lessons.length === 1){
            alert("You cannot delete the last Lesson");
        }
        else {
            var lessons = this.state.module.lessons.filter(
                lesson => lesson.id !== deleteLesson.id
            )
            var newCourse = this.state.course;
            var newModules = this.state.course.modules;

            for (var i = 0; i < newModules.length; i++) {
                if(this.state.module.id === newModules[i].id){
                    newModules[i].lessons = lessons;
                    this.setState({
                        module: newModules[i]
                    })
                }
            }
            newCourse.modules = newModules;

            this.setState({
                course: newCourse
            })
        }
    }

    addModule = btn => {
        var newModule = {
            "id": new Date().getTime(),
            "title": this.state.newModuleName,
            "lessons": [
                {
                    "id": new Date().getTime(),
                    "title": "Lesson 1",
                    "topics": [
                        {
                            "id": new Date().getTime(),
                            "title": "Topic 1"
                        }
                    ]
                }]
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
    titleChangedLesson = (lesson) => {
        var txt;
        var name = prompt("Please enter your new Lesson Name:", "");
        if (name == null || name == "") {
            alert("User cancelled the prompt.");
        } else {
            txt =  name ;
            var lessons = this.state.module.lessons;

            for (var i = 0; i < lessons.length; i++) {
                if(lesson.id === lessons[i].id){
                    lessons[i].title = txt;
                    console.log("Executed");
                }
            }

            var newCourse = this.state.course;
            var newModules = this.state.course.modules;

            for (var i = 0; i < newModules.length; i++) {
                if(this.state.module.id === newModules[i].id){
                    newModules[i].lesson = lessons;
                    this.setState({
                        module: newModules[i]
                    })
                }
            }
            newCourse.modules = newModules;

            this.setState({
                course: newCourse
            })
        }
    }


    titleChanged = (module) => {
        var txt;
        var name = prompt("Please enter your new Module Name:", "");
        if (name == null || name == "") {
            alert("User cancelled the prompt.");
        } else {
            txt =  name ;
            var modules = this.state.course.modules;

            for (var i = 0; i < modules.length; i++) {
                if(module.id === modules[i].id){
                    modules[i].title = txt;
                    console.log("Executed");
                }
            }

            var newCourse = this.state.course;
            newCourse.modules = modules;
            this.setState(
                {
                    course: newCourse
                });
        }
    }


    addLesson = (lesson) => {
        var txt;
        var name = prompt("Please enter your new Lesson Name:", "");
        if (name == null || name == "") {
            alert("User cancelled the prompt.");
        } else {
            txt =  name ;
            var lessons = this.state.module.lessons;
            var newLesson = {
                "id": new Date().getTime(),
                "title": txt,
                "topics":[{
                    "id": 1,
                    "title": "Topic 4"
                }]
            }
            var newCourse = this.state.course;
            this.state.module.lessons.push(newLesson);
            this.setState({
                course: newCourse
            });
            this.courseService.updateCourse(this.state.course.id, this.state.course);
        }
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
                                        titleChanged = {this.titleChanged}
                                        moduleColor={this.moduleColor}
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
                                        this.state.lessons.map(
                                            (lesson) => {
                                                return (
                                                    <LessonTabs
                                                        lesson={lesson}
                                                        selectLesson={this.selectLesson}
                                                        deleteLesson={this.deleteLesson}
                                                        updateLesson ={this.titleChangedLesson}
                                                        lessonActive={this.lessonActive}
                                                    />
                                                )
                                            }
                                        )
                                    }
                                    <li className="nav-item">
                                        <i className="fas fa-plus nav-link" onClick={this.addLesson}></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <TopicPills lesson = {this.state.lesson}
                                        deleteTopic={this.deleteTopic}
                                        editTopic={this.editTopic}
                                        addTopic={this.addTopic}
                                        selectTopic = {this.selectTopic}
                                        selectTopicTheme={this.selectTopicTheme}
                            />

                        </div>
                        <div className="row">
                            <div className="col-8"></div>
                            <div className="col-4">
                                <button type="button"
                                        className="btn btn-success"
                                        data-toggle="button"
                                        autocomplete="off"
                                        onClick={
                                            ()=>{alert("Saved")}
                                        }>Save</button>
                                <button type="button"
                                        className="btn btn-primary"
                                        data-toggle="button"
                                        aria-pressed="false"
                                        autocomplete="off"
                                        onClick= {
                                            () => {
                                                store.dispatch({
                                                    type: 'TOGGLE'
                                                })
                                            }
                                        }
                                        >Preview</button>

                            </div>
                        </div>
                        <br />
                        {/*<WidgetList/>*/}

                        <Provider store={store}>
                            <WidgetListContainer widgets={this.state.widgets}
                                                 topic={this.state.topic}/>
                        </Provider>

                    </div>
                </div>
            </div>
        )
    }
}
export default CourseEditor