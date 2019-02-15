
class CourseService {
  constructor() {}

  createCourse = course => {
    var data = JSON.stringify({
      "id": new Date().getTime(),
      "sections": [],
      "modules": [],
      "title":"New Course"
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        return JSON.parse(this.responseText);
      }
    });

    xhr.open("POST", "http://localhost:8080/api/courses");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("credentials", "include");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "c1bf79bd-411e-4ad3-a711-ae7687631323");

    xhr.send(data);
  }

  findCourseById = courseId =>{
    var data = JSON.stringify(false);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        return JSON.parse(this.responseText);
      }
    });

    xhr.open("GET", "http://localhost:8080/api/courses/"+courseId);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("credentials", "include");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "d472633e-01ff-45b7-a945-097d0dbbc7f0");

    xhr.send(data);
  }

  findAllCourses = () =>{
    var data = JSON.stringify(false);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        return JSON.parse(this.responseText);
      }
    });

    xhr.open("GET", "http://localhost:8080/api/courses/");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("credentials", "include");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "938e89eb-7b04-47d8-b92c-8b97ba0d6f3f");

    xhr.send(data);
  }

  deleteCourse = deleteCourse =>{
    var data = JSON.stringify(false);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("DELETE", "http://localhost:8080/api/courses/"+deleteCourse.id);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("credentials", "include");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "1319a8cc-2efb-4890-b532-95c4291003e0");

    xhr.send(data);
  }

  updateCourse = (id, course) => {
    var data = JSON.stringify({
      "id": course.id,
      "sections": course.sections,
      "modules": course.modules
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("PUT", "http://localhost:8080/api/courses/"+id);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("credentials", "include");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "23ffd04d-47c9-45ae-981e-20c4523fcb06");

    xhr.send(data);
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
              return this.sanitize(topics[l].widgets);
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
              if(topics[l].widgets[0] === undefined){
                topics[l].widgets[0] =
                {
                  "id" : new Date().getTime(),
                    "name" : "Paragraph",
                    "type": "PARAGRAPH",
                    "text": "Hello"
                }

              }
              topics[l].widgets[0].hideup = "disabled";
              topics[l].widgets[topics[l].widgets.length-1].hidedown = "disabled";
              return this.sanitize(topics[l].widgets);
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
                return this.sanitize(widgets);
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

                return this.sanitize(widgets);
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
  upWidget = (widgetId) => {
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

                return this.sanitize(widgets);
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

  downWidget = (widgetId) => {
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

                return this.sanitize(widgets);
              }
            }
          }
        }
      }
    }
  }

  sanitize = widgets => {
    for(var i=0 ; i < widgets.length; i++){
      if(widgets[i] === undefined){
        return widgets
      }

      if(widgets.length === 1){
        widgets[i].hideup = "disabled"
        widgets[i].hidedown = "disabled"
      }
      else if(i === 0){
        widgets[i].hideup = "disabled"
        widgets[i].hidedown = ""
      }
      else if(i === widgets.length-1 ){
        widgets[i].hideup = ""
        widgets[i].hidedown = "disabled"
      }
      else{
        widgets[i].hideup = ""
        widgets[i].hidedown = ""
      }
    }
    return widgets
  }

}
export default CourseService