const unhandledErrors = () => {
  process.on("uncaughtException", (err) => {
    console.log(err.stack);
    process.exit(1);
  });

  process.on("unhandledRejection", (err) => {
    console.log(err.stack);
    process.exit(1);
  });
};

export { unhandledErrors };
