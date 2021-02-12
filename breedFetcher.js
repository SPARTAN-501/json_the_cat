const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    /*
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received]
    console.log(typeof body);
    */
    
    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);
    /*
    console.log(data);
    console.log(typeof data);
    */
    if (data.length > 0) {
      console.log(data[0].description);
      callback(null, data[0].description);
    } else {
      callback(null, "Breed not found");
    }
    // console.log('body:', body); // Print the HTML for the Google homepage.
  });
};

module.exports = { fetchBreedDescription };