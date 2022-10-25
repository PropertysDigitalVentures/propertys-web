const axios = require('axios');
require('dotenv').config();

exports.handler = async (event, context) => {
  let response
  let userResponse;

  // Setup config 
  const config = {
    headers: { 
      'Authorization': `Bearer ${process.env.MEDIUM_TOKEN}}}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8'
    }
    
};

  // Make a post request to the API to get the authenticated user
  // - This will give us the user ID we need to fetch data
  userResponse = await axios.get('https://api.medium.com/v1/me', config)

  // Use the returned User ID to grab the publications
  response = await axios.get(`https://api.medium.com/v1/users/${userResponse.data.data.id}/publications`, config);

  return {
    statusCode: 200,
    body: JSON.stringify(response.data.data)
  }
}