import * as tokenService from "./tokenService";
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/reviews`;


function create(review){
  console.log(tokenService.getToken());
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

async function getComments(id) {
  const res = await fetch(`${BASE_URL}/${id}/comments`, {
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
  });
  return await res.json();
function deleteOne(id) {
  console.log("deleteOne review Service function");
  return fetch(`${BASE_URL}/${id}`, {method: 'DELETE'}) 
  .then(res => res.json)
}

export {
  deleteOne,
  create,
  createComment,
  getComments,
};
