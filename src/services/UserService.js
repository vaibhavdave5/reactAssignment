
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
                    resolve(JSON.parse(this.responseText))
                }
            });

            xhr.open("POST", "https://damp-castle-92508.herokuapp.com/api/login");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("credentials", "include");
            xhr.setRequestHeader("Postman-Token", "22b3028d-b6c8-4bb5-a334-a87626dbe19b");

            xhr.send(data);
        })
        return promise
    }

    register = (username, password, fname, lname) => {
        var data = JSON.stringify({
            "username": username.value,
            "password": password.value,
            "firstName": fname.value,
            "lastName": lname.value,
            "role": "",
            "courses": []
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                window.location.href ="/"
            }
        });

        xhr.open("POST", "https://damp-castle-92508.herokuapp.com/api/register");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("credentials", "include");
        xhr.setRequestHeader("Postman-Token", "3a51f33b-920b-421f-b2d3-918cc90286eb");
        xhr.send(data);
    }

    getUser = () => {
        const promise = new Promise((resolve, reject) => {
            var data = JSON.stringify(false);

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    resolve(JSON.parse(this.responseText));
                }
            });

            xhr.open("GET", "https://damp-castle-92508.herokuapp.com/api/getUser");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("credentials", "include");
            xhr.setRequestHeader("Postman-Token", "3064b3ab-0494-4be0-85e5-f3def55ae037");

            xhr.send(data);
        })
       return promise;
    }

    logout = () => {
        var data = JSON.stringify(false);

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
                window.location.href ="/"
            }
        });

        xhr.open("POST", "https://damp-castle-92508.herokuapp.com/api/logout");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("credentials", "include");
        xhr.setRequestHeader("Postman-Token", "52ef102f-0228-4d58-abe1-c14d3913a80d");

        xhr.send(data);
    }

    update = (username, password, fname, lname) => {
        var data = JSON.stringify({
            "id" : new Date().getTime(),
            "username": username.value,
            "password": password.value,
            "firstName": fname.value,
            "lastName": lname.value,
            "role": "",
            "courses": []
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                window.location.href ="/"
            }
        });

        xhr.open("POST", "https://damp-castle-92508.herokuapp.com/api/update");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("cache-control", "no-cache");
        xhr.setRequestHeader("credentials", "include");
        xhr.setRequestHeader("Postman-Token", "3a51f33b-920b-421f-b2d3-918cc90286eb");
        xhr.send(data);
    }
}

export default UserService