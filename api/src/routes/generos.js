const { Router } = require('express');
const axios = require("axios");
const Generos = require('../models/Generos');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async(req, res, next) => {
    try {
        let api =  await axios.get("https://api.rawg.io/api/genres?key=b3951d3d1a2b455e803a35952ecc7a6c&dates=2019-09-01,2019-09-30&platforms=18,1,7")

        let format = api.data.results.map( g => {
            const obj = {
                id: g.id,
                name: g.name,
            }
            return obj
        })
            
        res.send(format)
        await Generos.bulkCreate(format)


    } catch (error) {
        next(error)
    }
})


module.exports = router;
