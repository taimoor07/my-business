import mongoose from "mongoose";
import currentConf from "./current_config.js";

async function connectDatabase() {
  const connOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  try {
    const conn = await mongoose.connect(currentConf.mongodb, connOptions);
    if (conn) {
      console.log(`Database Connected on ${process.env.NODE_ENV}`);
    }
  } catch (error) {
    console.log(error.message, error.stack);
  }
}

export { connectDatabase };
