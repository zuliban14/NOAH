const { Router} = require("express");
const router =Router();
const {check}=require('express-validator');
const { validarCampos } = require('../../../middlewares/validarcampos');

const {validarJWT}= require('../../../middlewares/validarjwt');
const {getPreguntas,crearPreguntas,actualizarPreguntas,eliminarPreguntas, buscarpreguntaPorAaspecto}=require('../../src/evaluacion/admin/preguntas/preguntasController');
const { getRespuestas, crearRespuestas, actualizarRespuestas, eliminarRespuestas } = require('../../src/evaluacion/admin/respuestas/respuestasController');
const {getCuestionario,crearCuestionario,actualizarCuestionario,eliminarCuestionario}=require('../../src/evaluacion/admin/cuestionario/cuestionarioController');
const {getpersEvaluadora, buscarpersonaEvaluadora}= require('../../src/evaluacion/admin/persEvaluadora/persEvaluadoraController');
const { datosdocente } = require('../../src/evaluacion/estudiantes/consultaDocente/infoDocenteController');
const { datosEstudiante } = require('../../src/evaluacion/estudiantes/consultaEstudiante/infoEstudianteController');
const { getAspectos, crearAspectos, eliminarAspectos, actualizarAspectos } = require("../../src/evaluacion/admin/aspectos/aspectosController");
const { isDate } = require("../../../helpers/isDate");


//router.use(validarJWT);// se valida en todas las rutas 

///////////RUTAS DE ASPECTOS /////
router.get('/listAspecto', getAspectos);
//router.get('/busqueda', buscarpreguntaPorAaspecto);
router.post('/createAspecto',
   [
      check('nombre', 'El titulo es obligatorio').not().isEmpty(),
      
     check('descripcion', 'la descripcion es obligatoria').not().isEmpty(),
     check('estado')
     .optional({ checkFalsy: true }) // Esto permite campos opcionales o valores "falsos" como ""
     .isBoolean().withMessage('El campo activo debe ser booleano.'),
      validarCampos
  ],
     crearAspectos);
router.put('/updateAspecto/:id',  actualizarAspectos);
router.delete('/deleteAspecto/:id', eliminarAspectos);
//////////////////////////////////////////////////////////////////////
///////////////////rutas PREGUNTAS//////////////////////////////////////////

router.get('/listPregunta', getPreguntas);
router.get('/buscarPorAspecto/:id',
    [check('id_aspectos', 'debe ingresar el aspecto').not().isEmpty(),validarCampos],
     buscarpreguntaPorAaspecto);
router.post('/createPregunta',
    [
        check('titulo', 'El titulo es obligatorio').not().isEmpty(),
        check('subtitulo', 'Ingresar el subtitulo').not().isEmpty(),
        check('imagen', 'no hay imagen'),
        check('valor', 'Debe de ingresar el valor').not().isEmpty(),
        check('id_aspectos', 'Debe seleccionar el aspecto a evaluar').not().isEmpty(),
        check('id_tipo_pregunta', 'Debe selecionar el tipo de pregunta').not().isEmpty(),
        check('orden', 'que orden tiene su pregunta').not().isEmpty(),
        check('estado', 'que estado se encuntra').not().isEmpty(),
        validarCampos
    ],
     crearPreguntas);
router.put('/updatePregunta/:id', actualizarPreguntas);
router.delete('/deletePregunta/:id', eliminarPreguntas);

//////////////////////RESPUESTAS///////////////////////

router.get('/listRes', getRespuestas);
router.post('/createRes',
    [
        check('nombre', 'El titulo es obligatorio').not().isEmpty(),
        check('imagen', 'El titulo es obligatorio').not().isEmpty(),
        check('valor', 'El valor de la pregunta es obligatoria').not().isEmpty(),
        check('id_preguntas', 'se debe seleccionara la pregunta').not().isEmpty(),
        check('estado', 'estado ').not().isEmpty(),
        validarCampos 
    ]
    , crearRespuestas);
router.put('/updateRes/:id', actualizarRespuestas);
router.delete('/deleteRes/:id', eliminarRespuestas);
/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////CUESTIONARIO////////////////////////////////////////////////////////

router.get('/listCuestionario', getCuestionario);
router.post('/createCues',
    [
        check('nombre', 'El titulo es obligatorio').not().isEmpty(),
        check('descripcion', 'ingresa la descripcion').not().isEmpty(),
        check('fecha_inicio', 'Fecha de inicio es requerida y debe ser una fecha válida').custom(isDate),
        check('fecha_fin', 'fecha fin de evaluacion').custom(isDate),
        check('id_preguntas', 'pregunta').not().isEmpty(),
        check('id_usuario', 'usuario').not().isEmpty(),
        check('id_periodo_academico', 'periodo academico').not().isEmpty(),
        check('estado', 'Estado de la encuesta').not().isEmpty(),
        check('llave_abreviatura', 'Abreviatura').not().isEmpty(),
        validarCampos
    ],
    crearCuestionario);
router.put('/updateCues/:id', actualizarCuestionario);
router.delete('/deleteCues/:id', eliminarCuestionario);

///////////////////PERSONA EVALUADORA///////////////////////


router.get('/listEvaluador',getpersEvaluadora);
router.get('/buscarEvaluador/:id',buscarpersonaEvaluadora);

/////////////////////VISTA ESTUDIANTE CONSULTA DOCENTES Y DATOS ESTUDIANTES ///




router.get('/doc/:id',
    [check('codigo', 'ingrese el codigo').not().isEmpty(),validarCampos],
    datosdocente);
router.get('/estu/:id',
    [check('codigo', 'ingrese el codigo').not().isEmpty(),validarCampos],
    datosEstudiante);




module.exports = router;