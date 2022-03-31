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

async function getComments(id) {
  const res = await fetch(`${BASE_URL}/${id}/comments`, {
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
  });
  return await res.json();
}

export {
  // getAllReviews,
  create,
  createComment,
  getComments,
};
