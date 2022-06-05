const mongoose = require("mongoose");
const MONGODB_URI =
  "mongodb+srv://W8PypVqIRJXDReMh:W8PypVqIRJXDReMh@cluster0.1nq2x.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI);
mongoose.connection
  .on("open", () => {
    console.log("Connected to DataBase");
  })
  .once("error", () => {
    console.log("Failed to connect to DataBase");
  });

module.exports = mongoose;
