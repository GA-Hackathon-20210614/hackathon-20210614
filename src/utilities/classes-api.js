import sendRequest from './send-request';
import { getToken } from "./users-service";
const BASE_URL = '/api/classes';

export function getAll() {
    return sendRequest(`${BASE_URL}/index`);
}

export function getById(id) {
    const token = getToken();
    return sendRequest(`${BASE_URL}/${id}`);
}

export function updateOne(classData) {
    return sendRequest(`${BASE_URL}/:${classData.id}`, 'PUT', classData);
}

export function deleteOne(id) {
    return sendRequest(`${BASE_URL}/:${id}`, 'DELETE');
}

export function create(classData) {
    return sendRequest(`${BASE_URL}/create`, 'POST', classData)
}