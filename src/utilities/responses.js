const successResponse = (res, status, resData) => {
    res.status(status).json({
      success: true,
      data: resData,
    });
};

const errorResponse = (res, status, errMessage) => {
  return res.status(status).json({
    success: false,
    error: errMessage,
  });
};

export { successResponse, errorResponse };