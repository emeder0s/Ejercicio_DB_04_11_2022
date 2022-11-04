const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })
    
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/insert', urlencodedParser, (req, res) => {
    const url = "mongodb://127.0.0.1:27017/";
    var mydb = "EjercicioDB_041122";
    var collection =  "Usuarios";
    var myobj = { "nombre": req.body.username, "direccion": req.body.password };
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(mydb);
        
        dbo.collection(collection).insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("Documento insertado");
            db.close();
        });
    });

    res.send("ÉXITO!");
});

app.listen(3000);
    