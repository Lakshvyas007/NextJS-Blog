import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected");
  } catch (error) {
    console.log("Failed");
    throw new Error("Connection failed!");
  }
};

export default connect;
