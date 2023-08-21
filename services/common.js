const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGJkYzRkNGEyN2E3OWE0ZGM4ZjUzNiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkyNTI1ODM0fQ.GWGBiz4WnPYzjVCFMM93mi1_HUsuY4lJB5r1HGXeT1k";
  return token;
};
