import { BASE_URL, ORIGIN_URL } from './utils';

export const register = ({password, email}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Origin': ORIGIN_URL
    },
    body: JSON.stringify({password, email})
  })
  .then(checkResponse)
};
export const authorize = ({password, email}) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Origin': ORIGIN_URL
    },
    body: JSON.stringify({password, email})
  })
  .then(checkResponse)
};
export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Origin': ORIGIN_URL,
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(checkResponse)
}

const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.statusText}`)

