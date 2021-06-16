import sendRequest from './send-request';

const BASE_URL = '/api/assignments';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function updateOne(assignmentData) {
    return sendRequest(`${BASE_URL}/${assignmentData.id}`, 'PUT', assignmentData);
}

export function deleteOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function create(assignmentData) {
    return sendRequest(BASE_URL, 'POST', assignmentData)
}