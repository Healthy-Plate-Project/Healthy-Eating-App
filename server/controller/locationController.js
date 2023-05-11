const axios = require("axios");

const locationController = {
  getLocation: async function (req, res) {
    let locationArray = req.body.address.split(" ");
    for (let i = 0; i < locationArray.length; i++) {
      if (i != locationArray.length - 1) {
        locationArray[i] = locationArray[i] + "%20";
      }
    }
    const address = locationArray.join();
    const api_key = process.env.GOOGLE_PLACES_APIKEY;
    const config = {
      method: "GET",
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${api_key}`,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        res.json(response.data.results[0].geometry.location);
      })
      .catch(function (error) {
        console.log(error);
        res(error);
      });
  },
};

module.exports = locationController;
