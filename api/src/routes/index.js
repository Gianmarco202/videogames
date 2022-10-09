const { Router } = require('express');
const videogamesRoute = require('./videogames')
const generosRoute = require('./generos')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogamesRoute);
router.use('/generos', generosRoute);
module.exports = router;
