module.exports = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error:{
      status: err.status,
      message: err.message
    }
  })
}
