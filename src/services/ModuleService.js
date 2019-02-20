
class ModuleService {
    constructor() {}

    findAllModules = cid => {
        const promise = new Promise((resolve, reject) => {
            var data = JSON.stringify(false);

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    resolve(JSON.parse(this.responseText));
                }
            });

            xhr.open("GET", "https://damp-castle-92508.herokuapp.com/api/course/" + cid + "/modules");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("credentials", "include");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "2ac1d87b-fa9b-400e-b62d-2c97bf43bcfa");

            xhr.send(data);
        }
    )
        return promise;
    }

    createModule = (cid, module) =>{
        const promise = new Promise((resolve, reject) => {
            var data = JSON.stringify(false);

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    resolve(JSON.parse(this.responseText));
                }
            });
            xhr.open("POST", "https://damp-castle-92508.herokuapp.com/api/courses/" + cid + "/modules");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("credentials", "include");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "045c9dad-6f9a-4463-ba0f-733144d692b5");

            xhr.send(data);
        })
        return promise;
    }

    findModuleById = mid => {
        const promise = new Promise((resolve, reject) => {
            var data = JSON.stringify(false);

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    resolve(JSON.parse(this.responseText));
                }
            });

            xhr.open("GET", "https://damp-castle-92508.herokuapp.com/api/modules/" + mid);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("credentials", "include");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "f8a648e6-8eed-494c-ab34-3e63e42a23c9");

            xhr.send(data);
        })
        return promise;
    }

    updateModule = (mid, module) => {
        const promise = new Promise((resolve, reject) => {
            var data = JSON.stringify({
                "id": module.id,
                lessons: module.lessons,
                "title":module.title
            });

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    resolve(JSON.parse(this.responseText));
                }
            });
            xhr.open("PUT", "https://damp-castle-92508.herokuapp.com/api/modules/" + mid);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("credentials", "include");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "bd5832e6-e7a2-4de7-bb5e-f645b5636001");

            xhr.send(data);
        })
        return promise
    }

    deleteModule = mid => {
        const promise = new Promise((resolve, reject) => {
            var data = JSON.stringify(false);

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    resolve(JSON.parse(this.responseText));
                }
            });

            xhr.open("DELETE", "https://damp-castle-92508.herokuapp.com/api/modules/" + mid);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("credentials", "include");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "e9e8537b-c9dc-4774-bb08-7c3949787218");

            xhr.send(data);
        })
        return promise;
    }
}
export default ModuleService;