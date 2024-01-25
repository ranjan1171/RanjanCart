import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@ecommerce-web.5ynuhly.mongodb.net/ECOMMERCE-WEB?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Database Connected Successfully');
  } catch (error) {
    console.log('Error: ', error.message);
  }
};

export default Connection;

