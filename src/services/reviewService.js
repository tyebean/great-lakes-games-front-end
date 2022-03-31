import * as tokenService from "./tokenService";
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/reviews`;

function create(review) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authentication: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(review),
  }).then(res => res.json());
}

function createComment(comment, id) {
  return fetch(`${BASE_URL}/${id}/comments`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authentication: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(comment),
  }).then(res => res.json());
}

// async function getAllReviews() {
//   console.log("get all reviews function");
//   const res = await fetch(BASE_URL, {
//     headers: {
//       Authorization: `Bearer ${tokenService.getToken()}`
//     },
//   })
//   return await res.json()
// }

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
  // getAllReviews,
  create,
  createComment,
};
