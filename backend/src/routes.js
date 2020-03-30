const express = require('express');
const ongController = require('./controllers/ongController');
const IncidentController = require('./controllers/Incidentcontroller');
const ProfileController = require('./controllers/Profilecontroller');
const SessionController = require('./controllers/Sessioncontroller');
 
const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
routes.delete('/ongs/:id',ongController.delete);


routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile',ProfileController.index);

routes.post('/session',SessionController.create);

module.exports = routes;