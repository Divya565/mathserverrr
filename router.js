var express=require('express');
var router=express.Router();

var arithmetic=require('./controllers/arithmetic');
router.use ('/arithmetic',arithmetic);

var bitwise=require('./controllers/bitwise');
router.use('/bitwise',bitwise);

var trigonometry=require('./controllers/trignomery');
router.use('/trigonometry', trigonometry);

var matrixoperation=require('./controllers/matrixoperation');
router.use('/matrixoperation', matrixoperation);


module.exports = router; 