const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/games`;

async function getGameList() {
  const res = await fetch(`${BASE_URL}/browse`);
  return await res.json();
}

async function getGameDetails(id) {
  console.log(id)
  const res = await fetch(`${BASE_URL}/browse?id=${id}`)
  return await res.json();
}



export { getGameList, getGameDetails };
