const { validationResult } = require("express-validator");

exports.index_get = function (req, res) {
  res.render("form.pug");
};

exports.index_post = function (req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.locals.error_msg = errors.array()[0].msg;
    res.locals.email_value = req.body.email;
    res.locals.password_value = req.body.password;
    res.render("form");
    return;
  }

  res.locals.name = req.body.email;
  res.locals.password = req.body.password;

  res.render("success");
};
