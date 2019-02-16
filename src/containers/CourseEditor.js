import React from 'react'
import ModuleList from "../components/ModuleList";
import LessonTabs from "../components/LessonTabs";
import TopicPills from "../components/TopicPills";
import CourseService from "../services/CourseService"
import ModuleService from "../services/ModuleService"
import LessonService from "../services/LessonService"
import TopicService from "../services/TopicService"
import UserService from "../services/UserService"
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
        this.userService = new UserService()
        this.topicService = new TopicService();
        this.moduleService = new ModuleService();
        this.lessonService = new LessonService();

        const courseId = parseInt(props.match.params.id)
        this.state = {
            id:0,
            id2:0,
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
                }
            )
    }


    update =()=>{
        const courseId = parseInt(this.props.match.params.id)
        this.courseService.findCourseById(courseId)
            .then( (course) => {
                console.log(course)
                if(this.state.id > (course.modules.length-1)){
                        this.setState({
                            id:0
                        })
                    }

                    if(this.state.id2 > (course.modules[this.state.id].lessons.length-1)){
                        this.setState({
                            id2:0
                        })
                    }
                    this.setState({
                        course: course,
                        title: course.title,
                        module: course.modules[this.state.id],
                        lessons:course.modules[this.state.id].lessons,
                        lesson: course.modules[this.state.id].lessons[this.state.id2],
                        topic: course.modules[this.state.id].lessons[this.state.id2].topics[0],
                        newModuleName: "",
                    });
                }
            )
    }



    selectModule = module =>{
        var id = module.id
        var modules = this.state.course.modules;
        for(var i=0 ; i < modules.length; i++){
            if(id === modules[i].id){
                this.setState({
                    id: i,
                    module: modules[i],
                    lesson: modules[i].lessons[0],
                    topic: modules[i].lessons[0].topics[0],
                    widgets: modules[i].lessons[0].topics[0].widgets,
                    lessons:modules[i].lessons
                })
            }
        }
    }

    selectTopicTheme = topic =>{
        if(topic.id === this.state.topic.id){
            return "nav-link active"
        }
        return "nav-link"
    }

    selectLesson = lesson =>{
        var id = lesson.id
        var lessons = this.state.course.modules[this.state.id].lessons;
        for(var i=0 ; i < lessons.length; i++){
            if(id === lessons[i].id){
                this.setState({
                    id2: i
                })
            }
        }
        this.update()
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
                    this.topicService.updateTopic(newTopic[i].id, newTopic[i])
                        .then(this.update)
                }
            }
        }

    }

    addTopic = () => {
        this.topicService.createTopic(this.state.lesson.id, {}).then(this.update)
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
        var that = this
        this.moduleService.deleteModule(deleteModule.id)
            .then(this.update)

    }


    deleteLesson = deleteLesson => {
        if(this.state.module.lessons.length === 1){
            alert("You cannot delete the last Lesson");
        }
        else {
            this.lessonService.deleteLesson(deleteLesson.id)
                .then(this.update)
        }
    }

    addModule = btn => {

        this.moduleService.createModule(this.state.course.id)
            .then(this.update)

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
                    this.lessonService.updateLesson(lesson.id, lessons[i])
                        .then(this.update)
                }
            }

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
                console.log(JSON.stringify(modules[i]))
                if(module.id === modules[i].id){
                    modules[i].title = txt;
                    console.log(JSON.stringify(modules[i]))
                    this.moduleService.updateModule(module.id, modules[i])
                        .then(this.update)
                }
            }
        }
    }


    addLesson = (lesson) => {
        var txt;
        var name = prompt("Please enter your new Lesson Name:", "");
        if (name == null || name == "") {
            alert("User cancelled the prompt.");
        } else {
            this.lessonService.createLesson(this.state.module.id,{})
                .then(this.update)
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