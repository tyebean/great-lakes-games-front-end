import * as tokenService from './tokenService'
// const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/reviews`
// i'm not so sure about the above code, but the below code is in Puppies CRUD frontend lecture
const BASE_URL = '/api/reviews'

function create(review){
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

export {
  create,
}
