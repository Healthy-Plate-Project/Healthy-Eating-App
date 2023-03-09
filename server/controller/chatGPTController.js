const { Configuration, OpenAIApi } = require("openai");

const chatGPTController = {
  getResponse: async function (req, res) {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
    });
    res.json(completion.data.choices[0].message);
  },
};

module.exports = chatGPTController;
