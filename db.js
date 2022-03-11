const mongoose = require("mongoose");
//database connection
dbConnect();
async function dbConnect() {
  try {
    // await mongoose.connect(
    //   "mongodb+srv://FSDB3group7:FSDB3group7@ictakcluster.rpo6w.mongodb.net/JOBPORTAL?retryWrites=true&w=majority",
    //   { useNewUrlParser: true }
    // );
    await mongoose.connect(
      "mongodb+srv://userone:userone@ictakfiles.mxjse.mongodb.net/JOBPORTAL?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Mongo DB connection unsuccessful");
  }
}

module.exports = mongoose;
