import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/reviews`


function create(review){
  console.log(tokenService.getToken());
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authentication': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(review)
  })
  .then(res => res.json())
}

function deleteOne(id) {
  console.log("deleteOne review Service function");
  return fetch(`${BASE_URL}/${id}`, {method: 'DELETE'}) 
  .then(res => res.json)
}

export {
  deleteOne,
  create,
}
