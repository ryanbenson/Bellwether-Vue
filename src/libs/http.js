const getAvatar = async () => {
  const faceCount = 1; // just need one for the avatar
  const faceEmotion = "happiness";
  const url = `https://uifaces.co/api?limit=${faceCount}&emotion[]=${faceEmotion}&random`;

  let response = await fetch(url, {
    headers: { "X-API-KEY": process.env.VUE_APP_UIFACES_API_KEY }
  });
  let data = await response.json();
  return data;
};

const getList = async (terms, page) => {
  const apiKey = process.env.VUE_APP_TRAACKR_API_KEY;
  const api = "http://api.traackr.com/1.0/influencers/search";
  const apiUrl = `${api}?api_key=${apiKey}&keywords=${terms}&page=${page}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

export { getAvatar, getList };
