
class LessonService {
    constructor() {}

    createLesson = (mid, lesson) => {
        var data = JSON.stringify({
            "id": new Date().getTime(),
            "topics": []
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "http://localhost:8080/api/module/"+mid+"/lesson");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("credentials", "include");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "29bbedb5-c570-4965-bfa0-782c3f2c1a5b");

        xhr.send(data);
    }

    findAllLessons = (mid) => {
        var data = JSON.stringify(false);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                return JSON.parse(this.responseText);
            }
        });

        xhr.open("GET", "http://localhost:8080/api/module/3214/lesson");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("credentials", "include");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "86e2f7a4-f72d-4184-8756-f9453396d102");

        xhr.send(data);
    }

    findLessonById = (lid) => {
        var data = JSON.stringify(false);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                return JSON.parse(this.responseText);
            }
        });

        xhr.open("GET", "http://localhost:8080/api/lesson/"+lid);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("credentials", "include");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "8b657d9a-6f9d-42a8-9312-f958c0b8b0c1");

        xhr.send(data);
    }

    updateLesson = (lid, lesson) => {
        var data = JSON.stringify({
            "id": lesson.id,
            "topics": lesson.topics
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("PUT", "http://localhost:8080/api/lesson/"+lid);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("credentials", "include");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "d1c90a18-69ee-4d61-bba1-8b3ee06f76ec");

        xhr.send(data);
    }

    deleteLesson = (lid) => {
        var data = JSON.stringify(false);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("DELETE", "http://localhost:8080/api/lesson/"+lid);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("credentials", "include");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "ff5f6825-2799-44c5-bff2-ae36fd976556");

        xhr.send(data);
    }

}
export default LessonService