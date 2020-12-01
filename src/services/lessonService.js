import tokenService from '../services/tokenService';
const BASE_URL = 'api/lessons/';

export default {
  create,
  getAll,
  deleteOne,
  getOne,
  update,
};

// this works cory
export function create(lesson) {
  return fetch(
    BASE_URL,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        //  'Authorization': 'Bearer' + tokenService.getToken()
      },
      body: JSON.stringify(lesson),
    },
    {
      mode: 'cors',
    }
  ).then((res) => res.json());
}

// this works cory
function getAll() {
    console.log('hit lesson index service function')
  return fetch(
    BASE_URL,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        //  'Authorization': 'Bearer' + tokenService.getToken()
      },
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

// this works cory
function deleteOne(id) {
  return fetch(
    `${BASE_URL}${id}`,
    {
      method: 'DELETE',
      headers: { Authorization: 'Bearer ' + tokenService.getToken() },
    },
    { mode: 'cors' }
  ).then((res) => res.json());
}

function getOne(lesson) {
    console.log(lesson)
  return fetch(`${BASE_URL}${lesson._id}`, { mode: 'cors' }).then((res) =>
    res.json()
  );
}

// this works cory
function update(lesson) {
    return fetch(
      `${BASE_URL}${lesson._id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + tokenService.getToken(),
        },
        body: JSON.stringify(lesson),
      },
      { mode: 'cors' }
    ).then((res) => res.json());
  }

// function update(lesson) {
//   return fetch(
//     `${BASE_URL}${lesson._id}`,
//     {
//       method: 'PUT',
//       headers: {
//         'content-type': 'application/json',
//         Authorization: 'Bearer ' + tokenService.getToken(),
//       },
//       body: JSON.stringify(lesson),
//     },
//     { mode: 'cors' }
//   ).then((res) => res.json());
// }
