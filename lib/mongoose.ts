import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  // mongoose.set("strictQuery", true);
  if (!process.env.NEXT_PUBLIC_MONGODB_URL) {
    return console.log("Missing mongodb url");
  }

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL, {
      dbName: "devflow",
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
