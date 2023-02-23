const photoController = {
  getGooglePhoto: async function (req, res) {
    const max_height = req.body.max_height
      ? `&maxheight=${req.body.max_height}`
      : "";
    const max_width = req.body.max_width
      ? `&maxwidth=${req.body.max_width}`
      : "";
    const api_key = process.env.GOOGLE_PLACES_APIKEY;
    const url = `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${req.body.photo_reference}${max_height}${max_width}&key=${api_key}`;
    res.json(url);
  },
};

module.exports = photoController;
