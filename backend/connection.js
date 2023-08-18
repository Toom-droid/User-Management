const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1:27017/mern-2"
mongoose.connect(URI);

const ObjectDb = mongoose.connection;

ObjectDb.on("connected", () => {
  console.log("DB Connected");
});
ObjectDb.on("error", () => {
  console.log("Error on connection");
});

module.exports = mongoose;
