const express = require("express");
const login=require ('./login/auth')

const evaDocente= require('./evaluacion/evaluacionDoce');

const router = express.Router();

//eportar cada uno de los modulos correspondientes en aqui
router.use("/login", login);
router.use("/evaDocente", evaDocente);

module.exports = router;