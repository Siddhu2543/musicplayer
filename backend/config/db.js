import mongoose from "mongoose";
import User from "../models/userModel.js";

const connectDB = async () => {
  try {
    const dbName = "projectdb";
    // const con = await mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
    const con = await mongoose.connect(
      `mongodb+srv://Siddharth2543:pHZJz5WAFP33ojiV@projectcluster.aecaxtz.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`Database Connected: ${con.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
