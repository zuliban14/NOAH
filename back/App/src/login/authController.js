const {response} = require('express');
const service = require("../../src/login/sesion.service");
const {generarJWT}=require('../../../helpers/jwt');
//vamos a traer el resultado de la validacion del check y extraemos la funcion valideitonResult



//controladores de las rutas funciones
const crearUsuario= async (req, res=response) => {
    //para mostrar lo que trae nuestro body se tiene que haser middleware en el index
    console.log(req.body);///para ver en consola lo que trae el req en el body 
    /* const {name, email, password}=req.body; */
    const params =req.body;//desestructurar el body 

    const usuario = await service.sesion(params);
    res.send(usuario);
   
};

const login = async (req,res) => {
  try {
      const params = req.body;
      console.log('datos',params); 
      const usuarios = await service.login(params);
      // const token = await generarJWT(usuario.id, usuario.nombre);
      // res.status(201).json({
      //     ok:true,
      //     msg:'usuario',
      //     token,
      //     usuario});

      if (Array.isArray(usuarios) && usuarios.length > 0) {
        const usuario = usuarios[0]; // Obtén el primer elemento del arreglo
  
        // Genera el token con `id` y `nombre` del usuario
        const token = await generarJWT(usuario.id, usuario.nombre);
  
        res.status(201).json({
          ok: true,
          id: usuario.id,
          name: usuario.nombre,
          msg: 'usuario',
          usuarios,
          token
        });
      } else {
        // Si el usuario no se encontró en la base de datos, devuelve un error
        res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
      }
  } catch (error) {
    res
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });       
  }
}


const renewToken = async (req, res) => {
  const { uid } = req; // Obtenido del middleware de validación del token

  try {
    const usuario = await login.findById(uid);

    if (!usuario) {
      return res.status(404).json({
        ok: false,
        msg: 'Usuario no encontrado',
      });
    }

    // Generar nuevo token
    const token = await generarJWT(uid, usuario.nombre);

    res.json({
      ok: true,
      token,
      usuario: [
        {
          id: usuario.id,
          nombre: usuario.nombre,
        },
      ],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: 'Error del servidor',
    });
  }
};


 
const sesion = async (req,res) => {
  try {
      const params = req.body;
      console.log('datos',params); 
      const usuario = await service.sesion(params);
      //res.send(usuario);
      //const token= await generarJWT(usuario.id, usuario.name);
     /* res.status(201).json({
        id:usuario.id,
        name:usuario.name,
        token 
      })*/
        res.json({
          ok:true,
          msg:'usuario',
          usuario
      });
  } catch (error) {
    res
    .status(error?.status || 500)
    .send({ status: "FAILED", data: { error: error?.message || error } });       
  }
}

const revalidarToken = async (req, res = response) => {
  const { id, nombre } = req;

  if (!id || !nombre) {
    return res.status(500).json({
      ok: false,
      msg: 'Error al obtener los datos del usuario',
    });
  }

  try {
    const token = await generarJWT(id, nombre);
    res.json({
      ok: true,
      id,
      nombre,
      token,
    });
  } catch (error) {
    console.error('Error al generar el nuevo token:', error);
    res.status(500).json({
      ok: false,
      msg: 'Error al renovar el token',
    });
  }
};


  module.exports={
    crearUsuario,
    sesion,
    revalidarToken,
    login,
    renewToken

  }