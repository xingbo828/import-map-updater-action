const axios = require('axios');

module.exports =  async (baseURL, env, data, auth) => {
  const response = await axios({
    url:'/services',
    baseURL,
    method: 'patch',
    data: data,
    params: {
      env
    },
    auth,
  });
  return response;
};


