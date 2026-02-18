import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  // Fix: changed nulll to null
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  // Fix: Check if connection exists; if so, return it. 
  // Previously, you were returning null if the connection DIDN'T exist.
  if (cached.conn) {
    return cached.conn;
  }
  
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    // Use the URI from your .env 
    cached.promise = mongoose
      .connect(`${process.env.MONGODB_URI}/quickcart`, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDB;