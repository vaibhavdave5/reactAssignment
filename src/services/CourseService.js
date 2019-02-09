import courses from './courses.json'

class CourseService {
  constructor() {
    this.courses = courses;
    this.tempcourse = courses;
  }

  createCourse = course => {
    if(course === null) {
      course = {
        id: (new Date()).getTime(),
        title: 'New Course'
      }
    }
    this.courses.push(course)
    return this.courses
  }

  findCourseById = courseId =>{
    this.courses = this.courses.find(
        course => course.id === courseId
    )
    return this.courses
  }

  findAllCourses = () =>{
    return this.courses;
  }

  deleteCourse = deleteCourse =>
      this.courses = this.courses.filter(
          course => course.id !== deleteCourse.id
      )

  updateCourse = (id, course) => {
    this.courses = this.tempcourse;
    console.log(this.courses.length);
    for (var i = 0; i < this.courses.length; i++) {
      if(id === this.courses[i].id){
        this.courses[i] = course;
      }
    }
  }

  /**
   * Creates only a single widget in the topic
   * @param topicId
   * @param widget
   * @returns {Array|*}
   */

  createWidget = (topicId, widget) => {
    // for every course
    for(var i=0; i<this.courses.length; i++){
      var modules = this.courses[i].modules;

      // for every module
      for(var j=0; j<modules.length;j++){
        var lessons = modules[j].lessons;


        // for every lesson
        for(var k=0; k<lessons.length;k++){
          var topics = lessons[k].topics;

          // for every topic
          for(var l=0; l<topics.length; l++){
            if(topics[l].id === topicId){
              topics[l].widgets.push(widget);
              return topics[l].widgets;
            }
          }

        }
      }
    }
  };

  /**
   * Returns all widgets for the particular topic
   * @param topicId
   * @returns {Array|*}
   */
  findWidgets = (topicId) => {

    for(var i=0; i<this.courses.length; i++){
      var modules = this.courses[i].modules;

      for(var j=0; j<modules.length;j++){
        var lessons = modules[j].lessons;

        for(var k=0; k<lessons.length;k++){
          var topics = lessons[k].topics;

          for(var l=0; l<topics.length; l++){
            if(topics[l].id === topicId){
              topics[l].widgets[0].top = true;
              topics[l].widgets[topics[l].widgets.length-1].down = true;
              return topics[l].widgets;
            }
          }

        }
      }
    }
  };

  /**
   * Returns a widget for a particular widget ID
   * @param widgetId
   * @returns {*}
   */
  findWidget = (widgetId) => {
    for(var i=0; i<this.courses.length; i++){
      var lessons = this.courses[i].lessons;
      for(var j=0; j<lessons.length;j++){
        var topics = lessons[j].topics;
        for(var k=0; k<topics.length;k++){
          var widgets = topics[k].widgets;
          for(var w=0; w<widgets.length; w++){
            if(widgets[w].id === widgetId){
              return widgets[w];
            }
          }
        }
      }
    }
  };

  /**
   *
   * @param widgetId
   * @param newwidget
   * @returns {T[]}
   */
  updateWidget = (widgetId, newwidget) => {
    for(var i=0; i<this.courses.length; i++){
      var modules = this.courses[i].modules;
      for(var j=0; j<modules.length;j++){
        var lessons = modules[j].lessons;
        for(var k=0; k<lessons.length;k++){
          var topics = lessons[k].topics;
          for(var l=0; l<topics.length; l++){
            var widgets = topics[l].widgets
            for(var m=0; m<widgets.length; m++){
              if(widgets[m].id===widgetId){
                widgets = widgets.map(widget =>
                    widget.id === widgetId ? newwidget : widget)
                return widgets;
              }
            }
          }

        }
      }
    }
  };

  /**
   * Deletes the widget
   * @param widgetId
   * @returns {Array|*}
   */
  deleteWidget = (widgetId) => {
    // for every course
    for(var i=0; i<this.courses.length; i++){
      var modules = this.courses[i].modules;

      // for every module
      for(var j=0; j<modules.length;j++){
        var lessons = modules[j].lessons;

        // for every lesson
        for(var k=0; k<lessons.length;k++){
          var topics = lessons[k].topics;

          // for every topic
          for(var l=0; l<topics.length; l++){
            var widgets = topics[l].widgets

            // for every widget
            for(var m=0; m<widgets.length; m++){
              if(widgets[m].id === widgetId){
                widgets.splice(m, 1);

                return widgets;
              }
            }
          }

        }
      }
    }
  };

  /**
   * Moves the widget up by one position
   * @param widgetId
   * @returns {Array|*}
   */
  upPosition = (widgetId) => {
    for(var i=0; i<this.courses.length; i++){
      var modules = this.courses[i].modules;

      for(var j=0; j<modules.length;j++){
        var lessons = modules[j].lessons;

        for(var k=0; k<lessons.length;k++){
          var topics = lessons[k].topics;

          for(var l=0; l<topics.length; l++){
            var widgets = topics[l].widgets

            for(var m=0; m<widgets.length; m++){
              if(widgets[m].id === widgetId){
                var index = m;
                var up_index = m - 1
                var temp = widgets[index]
                widgets[index] = widgets[up_index]
                widgets[up_index] = temp

                for(var p=0 ; p < widgets.length; p++){
                  if(widgets.length === 1){
                    widgets[i].hidedown ="disabled"
                    widgets[i].hideup ="disabled"
                  }
                  else{
                    if(i===0){
                      widgets[i].hideup = "disabled"
                      widgets[i].hidedown = ""
                    }

                    else if(i===(widgets.length-1)){
                      widgets[i].hidedown = "disabled"
                      widgets[i].hideup = ""
                    }

                    else{
                      widgets[i].hidedown = ""
                      widgets[i].hideup = ""
                    }
                  }
                }
                return widgets;
              }
            }
          }

        }
      }
    }
  }

  /**
   * Moves the array down by 1 step
   * @param widgetId
   * @returns {Array|*}
   */

  downPosition = (widgetId) => {
    for(var i=0; i<this.courses.length; i++){
      var modules = this.courses[i].modules;

      for(var j=0; j<modules.length;j++){
        var lessons = modules[j].lessons;

        for(var k=0; k<lessons.length;k++){
          var topics = lessons[k].topics;

          for(var l=0; l<topics.length; l++){
            var widgets = topics[l].widgets

            for(var m=0; m<widgets.length; m++){
              if(widgets[m].id === widgetId){
                var index = m;
                var up_index = m + 1
                var temp = widgets[index]
                widgets[index] = widgets[up_index]
                widgets[up_index] = temp

                for(var p=0 ; p < widgets.length; p++){
                  if(widgets.length === 1){
                    widgets[i].hidedown ="disabled"
                    widgets[i].hideup ="disabled"
                  }
                  else{
                    if(i===0){
                      widgets[i].hideup = "disabled"
                      widgets[i].hidedown = ""
                    }

                    else if(i===(widgets.length-1)){
                      widgets[i].hidedown = "disabled"
                      widgets[i].hideup = ""
                    }

                    else{
                      widgets[i].hidedown = ""
                      widgets[i].hideup = ""
                    }
                  }
                }
                return widgets;
              }
            }
          }

        }
      }
    }
  }

}
export default CourseService