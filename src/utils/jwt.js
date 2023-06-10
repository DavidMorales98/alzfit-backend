const jwt = require("jwt-simple");
const moment = require("moment");

const secret =
  "27EbHC1PuW$QLHZtTb5383IdihlJ9P$jRu9c72haewtaRM2U7B.fGT%fSzw0SqtAGSY1Qq69k%OL*#l4QdQvYbQ07N&2cx44&A0g6";
const createToken = (user) => {
  const payload = {
    id: user._id,
    name: user.name,
    email: user.email,
    licencia: user.licence,
    lat: moment().unix(),
    exp: moment().add(30, "days").unix(),
  };

  return jwt.encode(payload, secret);
};

module.exports = {
    secret,
    createToken
}