import sendRequest from './send-request';

const BASE_URL = '/api/classes';

export function getAll() {
    return sendRequest(BASE_URL);
  }

export function getById(id) {
  return sendRequest(`${BASE_URL}/:${id}`);
}

export function updateOne(classData) {
  return sendRequest(`${BASE_URL}/:${classData.id}`, 'PUT');
}

export function deleteOne(id) {
  return sendRequest(`${BASE_URL}/:${id}`, 'DELETE');
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}