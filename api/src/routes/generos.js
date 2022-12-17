const { Router } = require('express');
const axios = require("axios");
//const  Generos = require("../models/Generos")
const { Generos } = require('../db.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async(req, res, next) => {
    try {
        let api =  await axios.get("https://api.rawg.io/api/genres?key=b3951d3d1a2b455e803a35952ecc7a6c")
        console.log(api, 'api:::::')
        api.data.results.map( async g => {
            //console.log(results, 'results')
            await Generos.create( {   
                id: g.id,
                name: g.name,
            })
        
        })
            
        res.send(Generos.findAll())
        //await Generos.create(format)


    } catch (error) {
        next(error)
    }
})


module.exports = router;
