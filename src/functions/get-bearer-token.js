const axios = require('axios');

exports.handler = async (event, context) => {
  let response

  // Make a post request to the API to get an auth token
  response = await axios.post('https://uninterested-unicorns.us.auth0.com/oauth/token', {
      client_id: process.env.API_CLIENT_ID,
      client_secret: process.env.API_CLIENT_SECRET,
      audience:"https://uunicorns.io/",
      grant_type:"client_credentials"
    }
  );

  return {
    statusCode: 200,
    body: JSON.stringify(response.data)
  }
}