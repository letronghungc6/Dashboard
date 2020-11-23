const { log } = require('debug');
var express = require('express');
const { token } = require('morgan');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index1');
});
router.get('/login', function (req, res, next) {
  // res.cookie('userid' , '123' , {maxAge : 1000*60*3 , signed : true});
  // console.log(req.signedCookies.userid);

  res.render('login');
});


router.get('/dulieu', function (req, res, next) {
  let token = req.query.token;
  let phone = req.query.phone;
  req.session.phone = phone;
  if (req.session.phone) {
    res.render('dulieu', { token: token, phone: phone });
  }
  else {
    res.redirect("/login");
  }
});
router.get('/chitietdulieu', function (req, res, next) {
  let id = req.query.id;
  let token = req.query.token;
  let phone = req.query.phone;
  if (req.session.phone) {
    res.render('chitietdulieu', { id: id, token: token, phone: phone });
  }
  else {
    res.redirect("/login");
  }
});
router.get('/suathanhphan', function (req, res, next) {
  let id = req.query.id;
  let token = req.query.token;
  let phone = req.query.phone;
  if (req.session.phone) {
    res.render('suathanhphan', { token: token, phone: phone, id: id });
  }
  else {
    res.redirect("/login");
  }
});
router.get('/nhapthanhphan', function (req, res, next) {
  let token = req.query.token;
  let phone = req.query.phone;
  if (req.session.phone) {
    res.render('nhapthanhphan', { token: token, phone: phone });
  }
  else {
    res.redirect("/login");
  }
});

router.get('/thanhphan', function (req, res, next) {
  let token = req.query.token;
  let phone = req.query.phone;
  if (req.session.phone) {
    res.render('thanhphan', { token: token, phone: phone });
  }
  else {
    res.redirect("/login");
  }
})

router.get('/themmonan', function (req, res) {
  let token = req.query.token; 
  let phone = req.query.phone; 
  if (req.session.phone) {
    res.render('themmonan',{token:token, phone:phone});
  }
  else {
    res.redirect("/login");
  }
});


router.get('/suamonan', function (req, res, next) {
  let id = req.query.id;
  let token = req.query.token;
  let phone = req.query.phone; 
  if (req.session.phone) {
    res.render('suamonan',{token:token, phone:phone,id:id});
  }
  else {
    res.redirect("/login");
  }
});

router.get("/logout", async function (req, res) {
  await req.session.destroy();
  res.redirect("/dulieu");
})
module.exports = router;
