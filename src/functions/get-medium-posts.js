const axios = require('axios');
// require('dotenv').config();

exports.handler = async (event, context) => {
  // let response
  // let userResponse;

  // Setup config 
  const config = {
    headers: { 
      // 'Authorization': `Bearer ${process.env.MEDIUM_TOKEN}}}`, // uncomment this when you want to use the official Medium API
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Accept-Charset': 'utf-8'
    }
};


// NOTE: FOR ALL COMMENTED OUT CODE. THIS USES THE MEDIUM API AND AS OF 10/25/2022, IT IS NOT PULLING PUBLICATIONS, EVEN THOUGH
//       THEY EXIST. USING ALTERNATIVE FOR NOW.
  // Make a post request to the API to get the authenticated user
  // - This will give us the user ID we need to fetch data
  // userResponse = await axios.get('https://api.medium.com/v1/me', config)

  // Use the returned User ID to grab the publications
  // response = await axios.get(`https://api.medium.com/v1/users/${userResponse.data.data.id}/publications`, config);

  // Use public rss -> json server to just get the posts
  let posts = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@propertys_nft', config)

  return {
    statusCode: 200,
    body: JSON.stringify(posts.data.items)
  }
}