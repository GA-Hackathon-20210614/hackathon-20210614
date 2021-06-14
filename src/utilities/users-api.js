import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/:${id}`);
}

export function updateOne(userData) {
  return sendRequest(`${BASE_URL}/:${userData.id}`, 'PUT');
}

export function deleteOne(id) {
  return sendRequest(`${BASE_URL}/:${id}`, 'DELETE');
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
