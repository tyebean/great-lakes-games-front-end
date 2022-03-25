const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/games`;

async function getGameList() {
  const res = await fetch(`${BASE_URL}/browse`);
  return await res.json();
}

export { getGameList };
