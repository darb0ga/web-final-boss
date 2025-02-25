import axios from "axios";

const apiUrl = 'http://localhost:8080';

const api = axios.create({baseURL: `${apiUrl}/api`, withCredentials: false});

export default api;


export function addPoint(data, config, then, err) {
    api.post('/results/post', data, config)
        .then(response => then(response.data))
        .catch(error => console.log(error));
}

export function getPoints(data, then, err) {
    run(api.get, '/results/get', data, then, err);
}

export function deletePoints(data, then, err) {
    run(api.delete, '/results/delete', data, then, err);
}

export function registerApi(data, then, err) {
    run(api.post, '/users/register', data, then, err);
}

export function loginApi(data, then, err) {
    run(api.post, '/users/login', data, then, err);
}

function run(method, url, data, then, err) {
    method(url, data)
        .then(response => then(response.data))
        .catch(error =>{
            console.error(error);
            err(error.response?.data);
        });

}