
let express = require('express');
let redis = require('redis');
const cors = require('cors');

let redisClient = redis.createClient(6379, "receta_db_1");
let app = express();


app.use(express.json())
app.use(cors())


redisClient.on('connect', function(){
    console.log('Conectado a Redis Server');
});

/*app.listen(port) => {
    console.log(`Server running on port ${(port)}`)
});
*/
redisClient.set('key1', 'Prueba 1');
redisClient.set('key2', 'Prueba 2');
redisClient.set('key3', 'Prueba 2');
redisClient.get('key1', function(err, value){
    console.log(value);
});

redisClient.lpush('personajes', 'Darth Vader', 'Yoda', 'Han solo', 'Palpatina', 'Kylo Ren', redis.print);

redisClient.lrange("personajes", 0, -1, function(err, values){
    console.log(values)
    for (var i in values){
        console.log(values[i]);
    }
});


app.get('/', function( req, res){
    redisClient.lrange('personajes', 0, -1, function(err, values){
        res.send(JSON.stringify(values))
    })
})

app.post('/cargar', function( req, res){
    const {episodio, personaje} = req.body;
    redisClient.lpush(episodio, [personaje]);
    res.send('Carga OK')

 })

app.get('/listar/:episodio', function( req, res){
    let {episodio} = req.params;
    redisClient.lrange(episodio, 0, -1, function(err, values){
        res.send(JSON.stringify(values))
    })
})

app.delete('/eliminar/:episodio/:personaje', function(req, res){
    let {episodio, personaje} = req.params;
    redisClient.lrem(episodio, 1, personaje, function(){
        res.send('Personaje eliminado')
    })
})

app.listen(4000, function(){
    console.log('Listen in porth 4000!')
})


