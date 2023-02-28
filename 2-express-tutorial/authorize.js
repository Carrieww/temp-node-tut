const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 }; // then any callback next() can access the property req.user
    next();
  }else{
    res.status(401).send("Unauthorized")
  }
};

module.exports = authorize;
