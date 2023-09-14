const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.ROOM_DB, connectionParams);
    console.log("Connected to rooms database successfully");
  } catch (error) {
    console.error(error);
    console.log("Could not connect to the rooms database!");
  }
};
