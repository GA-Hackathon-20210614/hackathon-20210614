import sendRequest from './send-request';

const BASE_URL = '/api/students';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/:${id}`);
}

export function updateOne(studentData) {
    return sendRequest(`${BASE_URL}:${studentData.id}`, 'PUT', studentData);
}

export function deleteOne(id) {
    return sendRequest(`${BASE_URL}/:${id}`, 'DELETE');
}

export function create(studentData) {
    return sendRequest(BASE_URL, 'POST', studentData);
}