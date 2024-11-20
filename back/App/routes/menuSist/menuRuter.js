const { Router} = require("express");
const router =Router();
const {obtenerMenu}= require('../../src/MenuSist/menu.controller');
const{ validarJWT}=require('../../../middlewares/validarjwt')

router.get('/menuLis',  obtenerMenu);


module.exports = router;