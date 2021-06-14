import sendRequest from './send-request';

const BASE_URL = '/api/attendences';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/:${id}`);
}

export function updateOne(attendenceData) {
    return sendRequest(`${BASE_URL}/:${attendenceData.id}`, 'PUT', attendenceData);
}

export function deleteOne(id) {
    return sendRequest(`${BASE_URL}/:${id}`, 'DELETE');
}

export function create(attendenceData) {
    return sendRequest(BASE_URL, 'POST', attendenceData)
}