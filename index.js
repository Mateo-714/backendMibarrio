const express = require('express');// declaración
const app = express();//constructor de la clase Express
//const routes = require('./routes/routes');//Se definen las otras rutas, Crud
const cors = require('cors');

//importante para conexion del front con el back
//Uso de cors
app.use(cors({origin: '*'}));
// conectar con el link de su frontend app.use(cors({origin: 'https://ppi-app.vercel.app/'}))
const usuario_habitante = require('./routes/usuarioh');//crud
const evento = require('./routes/evento');
const calificacion = require('./routes/calificacion');
//const colegios = require('./routes/colegios');//crud
//por modulos(routaProductos, e...)


app.set('port',process.env.PORT || 3001)// 


//middleware
app.use(express.json());

//ajustes
//app.use('/api',routes);// peticiones directas, acciones, callback
app.use('/api/usuario',usuario_habitante);

app.use('/api/evento', evento);
app.use('/api/calificacion', calificacion);


//app.use('api/colegios',colegios)
app.listen(app.get('port'),()=>{
console.log('Servidor corriendo en puerto '+app.get('port'));

});

