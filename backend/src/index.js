const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://Fernando:271215023101f!@cluster0.k7aa5.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

//Métodos HTTP: get, post, put, delete

// Tipos de parâmetros:

// Query params: req.query (Filtros, ordenação, paginação)
//Route Params: request.parms(Identificar um recurso na alteração ou remoção)
//Body: request.body

// MongoDB (Não-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Omni'});
});

app.listen(3333);