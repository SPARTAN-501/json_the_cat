const request = require('request');
const args = process.argv.slice(2);
request('https://api.thecatapi.com/v1/breeds/search?q=' + args, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received]
  console.log(typeof body);
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
  if (data [0] !== undefined) {
    console.log(data[0]);
  } else if (data[0] === undefined) {
    console.log("Breed not found");
  }
  // console.log('body:', body); // Print the HTML for the Google homepage.
});