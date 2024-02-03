import cors from "cors";
import routes from "./routes/index.js";
import { connectDatabase } from "./config/db.js";
import express from "express";
import errorMiddleware from "./middleware/error.js";
import currentConf from "./config/current_config.js";
import morgan from "morgan";

import { unhandledErrors } from "./utilities/unhandle.js";
const app = express();
const port = currentConf.port || 3000;

// unhanlded exceptions and promise rejections handling.
unhandledErrors();

// Database Connection.
connectDatabase();

//cross site resource sharing
app.use(cors());

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//routes
app.use(routes);

//Error Middleware
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}!`
  );
});
