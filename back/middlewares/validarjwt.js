const {response}= require('express');

const validarJWT=(req, res=response, next)=>{
    //token en ek header
    const token=req.header('x-token');
    //console.log(token)
    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'No hay token en la peticion'
        })

    }
    try{
        const payload =jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        )
        console.log(payload);
        
        req.id=payload.id
        req.nombre=payload.nombre

    }catch(error){
        return res.status(401).json({
            ok: false,
            msg:'TOKEN NO VALIDO '
        });

    }
    next();
 
}

module.exports={
    validarJWT
}
