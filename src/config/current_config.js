
import { config } from "./config.js";

const environment = process.env.NODE_ENV;
const currentConf = config[environment];

export default currentConf;