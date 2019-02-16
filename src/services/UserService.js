import CourseService from "./CourseService";

class UserService {
    constructor() {}

    login = (username, password) => {
        const promise = new Promise((resolve, reject) => {
            var data = JSON.stringify({
                "username": username.value,
                "password": password.value,
                "firstName": "",
                "lastName": "",
                "role": "",
                "courses": []
            });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText)
                   resolve(this.responseText)
                }
            });

            xhr.open("POST", "http://localhost:8080/api/login");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "22b3028d-b6c8-4bb5-a334-a87626dbe19b");

            xhr.send(data);
        })
        return promise
    }

    register = (username, password) => {
        var data = JSON.stringify({
            "username": username.value,
            "password": password.value,
            "firstName": "",
            "lastName": "",
            "role": "",
            "courses": []
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "http://localhost:8080/api/register");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader( 'Access-Control-Allow-Credentials', 'true');
        xhr.setRequestHeader("Postman-Token", "3a51f33b-920b-421f-b2d3-918cc90286eb");

        xhr.send(data);
    }
}

export default UserService