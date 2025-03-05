
const routes = require("express").Router();

const lesson1Controllers = require("../controllers/lesson1");

routes.get('/nicolas', lesson1Controllers.nicolasRoute);
routes.get('/richard', lesson1Controllers.richardRoute);
routes.get('/', lesson1Controllers.brunoRoute);


module.exports = routes;