const axios = require('axios');
const getTestAPI = require('../index');
const { testLocation } = require('../seeds/testSeeds');

const locationController = {
  getLocation: async function (req, res) {
    if (getTestAPI.testAPI) {
      res.json(testLocation)
    } else {
      let locationArray = req.body.location.split(' ')
      for (let i = 0; i < locationArray.length; i++) {
        if (i != locationArray.length - 1) {
          locationArray[i] = locationArray[i] + '+';
        }
      }
      const address = locationArray.join()
      const api_key = process.env.GOOGLE_PLACES_APIKEY;
      const config = {
        method: 'GET',
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${api_key}`,
        headers: {}
      };
      axios(config)
        .then(function (response) {
          res.json(response.data);
        })
        .catch(function (error) {
          console.log(error);
          res(error)
        });
    }
  }
}

module.exports = locationController;
