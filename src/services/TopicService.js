
class TopicService {
    constructor() {}

    createTopic = (lid, topic) => {
        const promise = new Promise((resolve, reject) => {
            var data = JSON.stringify({
                "id": new Date().getTime(),
                "widgetList": []
            });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    resolve(JSON.parse(this.responseText));
                }
            });

            xhr.open("POST", "http://localhost:8080/api/lesson/"+lid+"/topic");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("credentials", "include");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "e9a037ae-5392-48d7-abea-4e6ab9a00120");

            xhr.send(data);
        })
        return promise
    }

        findAllTopics = (lid) => {
            const promise = new Promise((resolve, reject) => {
                var data = JSON.stringify(false);
                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        resolve(JSON.parse(this.responseText));
                    }
                });

                xhr.open("GET", "http://localhost:8080/api/lesson/" + lid + "/topic");
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("credentials", "include");
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.setRequestHeader("Postman-Token", "88b8d131-1dfd-4fb9-92db-705e1b7f2452");

                xhr.send(data);
            })
            return promise;
        }

        findTopicById = (tid) => {

            const promise = new Promise((resolve, reject) => {
                var data = JSON.stringify(false);

                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        resolve (JSON.parse(this.responseText));
                    }
                });

                xhr.open("GET", "http://localhost:8080/api/topic/" + tid);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("credentials", "include");
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.setRequestHeader("Postman-Token", "f3fa6aac-fd07-40b8-9ee7-09f50203867c");

                xhr.send(data);
            })
            return promise;
        }

        updateTopic = (tid, topic) => {
            const promise = new Promise((resolve, reject) => {

                var data = JSON.stringify({
                    "id": topic.id,
                    "widgetList": topic.widgetList
                });

                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        return (JSON.parse(this.responseText));
                    }
                });

                xhr.open("PUT", "http://localhost:8080/api/topic/" + tid);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("credentials", "include");
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.setRequestHeader("Postman-Token", "20d52918-e802-4705-ab0b-3c0a1c61cc09");

                xhr.send(data);
            })
            return promise;
        }

        deleteTopic = (tid) => {
            const promise = new Promise((resolve, reject) => {


                var data = JSON.stringify(false);

                var xhr = new XMLHttpRequest();
                xhr.withCredentials = true;

                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                        resolve(this.responseText);
                    }
                });

                xhr.open("DELETE", "http://localhost:8080/api/topic/"+tid);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("credentials", "include");
                xhr.setRequestHeader("cache-control", "no-cache");
                xhr.setRequestHeader("Postman-Token", "708c9b1c-d089-416c-9cd6-74763da228dc");

                xhr.send(data);
            })
            return promise;
        }
    }
    export default TopicService