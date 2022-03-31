import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/reviews`

function create(review) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(review)
  })
    .then(res => res.json())
}

function update(id, data) {
  console.log(id, data)
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
}

function deleteOne(id) {
  console.log("deleteOne review Service function");
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
    .then(res => res.json)
}


// below is for when we wanna implent auth
// function create(resourceData) {
//   return fetch(BASE_URL, {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${tokenService.getToken()}`,
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(resourceData)
//   })
//   .then(res => res.json())
// }


export {
  deleteOne,
  create,
  update
}
