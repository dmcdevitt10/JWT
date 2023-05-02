const jwt = require("jsonwebtoken");

const createToken = (username) => {
  return jwt.sign(
    {
      username,
    },
    "newToken",
    {
      expiresIn: "2 minutes",
    }
  );
};

module.exports = {
  login: async (req, res) => {
    const { username } = req.body;
    const token = createToken(username);
    res.status(200).send(token);
  },
  test: (req, res) => {
    const { token } = req.body;
    if (!token) {
      return res.status(400).send("No Token");
    }

    try {
      let authenticToken = jwt.verify(token, "newToken");
      return res.status(200).send('Good Token')
    } catch (err) {
        return res.status(400).send('Bad Token')
    }
  },
};
