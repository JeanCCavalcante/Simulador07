const { Router } = require('express');
const movieController = require('../controllers/movieControllers.js');

const routes = Router();

routes.get('/movies', movieController.index);
routes.post('/movies', movieController.store);
routes.put('/movies/:id', movieController.update);
routes.delete('/movies/:id', movieController.delete);

module.exports = routes;