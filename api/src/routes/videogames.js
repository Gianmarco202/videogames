const { Router } = require('express');
const axios = require('axios');
const { Videogames, Generos } = require('../db.js');

const { Op} = require('sequelize')


const router = Router();

router.get('/getAll', async (req,res, next) => {
    try {
        const api = await axios.get("https://api.rawg.io/api/games?key=b3951d3d1a2b455e803a35952ecc7a6c&dates=2019-09-01,2019-09-30&platforms=18,1,7")

        const format = api.data.results.map((juego)=> {
            const obj = {
                id: juego.id,
                nombre: juego.name,
                fecha_de_lanzamiento: juego.released,
                rating: juego.rating,
                plataformas: juego.platforms.map(n => n.platform.name),
                generos: juego.genres.map(g => g.name),
                image: juego.background_image,
            };
            return obj;
        })

        const db = await Videogames.findAll({include: [{ model: Generos}]})
        const suma = [...format, ...db]
        res.send(suma)
        
    } catch (error) {
        next(error)
    }
    /* return Videogames.findAll()
    .then((videogames) => {
        res.send(videogames)
    }) */
})

router.get("/", (req, res, next) => {
        
        let {nombre}= req.query;
        let gamePromiseApi 
        let gamePromiseDb
        if(nombre){
            gamePromiseApi = axios.get("https://api.rawg.io/api/games?key=b3951d3d1a2b455e803a35952ecc7a6c&dates=2019-09-01,2019-09-30&platforms=18,1,7name=" + nombre)
            gamePromiseDb = Videogames.findAll({
                include: Generos,
                where: {
                    nombre: {
                        [Op.iLike]: "%" + name + "%"
                    }
                },
                order: [
                    ['name', 'ASC'],
                ],
            })
        }else {
            gamePromiseApi = axios.get("https://api.rawg.io/api/games?key=b3951d3d1a2b455e803a35952ecc7a6c&dates=2019-09-01,2019-09-30&platforms=18,1,7")
            gamePromiseDb = Videogames.findAll({
                include: Generos
            })
        }
        Promise.all([
            gamePromiseApi,
            gamePromiseDb
        ])
        .then((respuesta) => {
            const  [
                gameApi,
                gameDb
            ] = respuesta
    
            let filteredGamesApi = gameApi.data.results.map((games) => {
                return {
                    id: games.id,
                    name: games.name,
                    image: games.background_image,
                    genero: games.genres,
                }
            })
            let allGames = [...filteredGamesApi, ...gameDb]
            res.send(allGames)
            
        })
        .catch(error => next(error))

    
}) 




router.get("/:id",async (req, res, next) =>{
    try {
        const id = req.params.id;
        let videogame
        if(typeof id === 'string' && id.length > 8) {
            videogame = await Videogames.findByPk(id, { include: [{ model: Generos}]})
            
        } else {
            response = await axios.get("https://api.rawg.io/api/games?key=b3951d3d1a2b455e803a35952ecc7a6c&dates=2019-09-01,2019-09-30&platforms=18,1,7/" + id)
            videogame = response.data.results
            
        }
        res.send(videogame)
            next(error)
    } catch (error) {
        
    }

})

router.post("/create",async (req, res, next) => {
    const {nombre, descripcion, fecha_de_lanzamiento, rating, plataformas, generos} = req.body;

    try {
    const nuevoJuego = await  Videogames.create({nombre,descripcion,fecha_de_lanzamiento,rating,plataformas})
    
    /* nuevoJuego.addGeneros(generos);
    const aux = Videogames.findByPk(nuevoJuego.id, {
        include: [{ model: Generos}],
    }) */
    
    res.send(nuevoJuego);

    } catch (error) {
        next(error)
    }
})

router.post("/:videogameId/genero/:generoId", async(req, res, next) => {
    try {
        const {videogameId, generoId} =req.params;
        const videogame = await Videogames.findByPk(videogameId)
        await videogame.addGenero(generoId)
        res.send(200)
    } catch (error) {
        next(error)
    }
})




module.exports = router;
