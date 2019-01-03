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

export { getAvatar };
