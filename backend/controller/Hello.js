const HelloRoute = (req, res) => {
  res.json({
    message: "Hello from the server!",
    success: true
  });
};

module.exports = HelloRoute;