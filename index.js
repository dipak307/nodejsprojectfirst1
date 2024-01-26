var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');

/* GET home page. */
router.use(bodyParser.urlencoded({extended:false}));

router.use("/addproduct",function(req,res){
  res.send('<form action="/product" method="post"><input type="text" name="title"/><input type="Number" name="size"/><button>submit</button> </form> ')
})
router.use("/product",function(req,res){
  console.log(req.body);
  res.redirect("/");
})

router.use('/', function(req, res, next) {
 res.send("hellow from express!");
});

module.exports = router;
