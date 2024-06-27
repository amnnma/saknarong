const fetch = require('node-fetch');

const getClientToken = async (origin, ip, accessToken) => {
  const params = {
    origin,
    ip,
    token: accessToken,
  };

  const response = await fetch('https://trefle.io/api/auth/claim', {
    method: 'post',
    body: JSON.stringify(params),
    headers: { 'Content-Type': 'application/json' },
  });

  const json = await response.json();
  return json;
};

export default getClientToken;
