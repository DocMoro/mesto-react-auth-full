module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://praktikum.tk');

  return next();
};
