import mongoose from "mongoose";

function connectToDatabse() {
  try {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("mongodb connected"));
  } catch (error) {
    console.log(error);
  }
}

export default connectToDatabse;
