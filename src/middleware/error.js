export default function (err, req, res, next) {
  console.log(err.stack);
  return res.status(400).json({
    success: false,
    error: err.message,
  });
}
