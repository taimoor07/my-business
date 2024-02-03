import dotenv from 'dotenv';
dotenv.config();

const config = {
  development: {
    port: process.env.PORT_DEV,
    host: process.env.HOST_DEV,
    mongodb: process.env.MONGO_URI_DEV
  },
  
  staging: {
    port: process.env.PORT_STAG,
    host: process.env.HOST_STAG,
    mongodb: process.env.MONGO_URI_STAG
  },

  production: {
    port: process.env.PORT_PROD,
    host: process.env.HOST_PROD,
    mongodb: process.env.MONGO_URI_PROD
  }
};

export { config };
