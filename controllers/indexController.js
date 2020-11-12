exports.index_get = function (req, res) {
  res.render("form.pug");
};

exports.index_post = function (req, res) {
  res.locals.name = req.body.email;
  res.locals.password = req.body.password;

  res.render("success");
};
