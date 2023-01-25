var express = require('express'); 
var mysql = require('promise-mysql');

var app = express();

var database = mysql.createConnection({ 
    host: "localhost",
    database: "vintage_bases",
    user:"root",
    password: "",
    port: 3306
});

database.connect((err => { 
    if (err) throw err; 
    console.log('MySQL Connected'); 
}));

app.get('/products', (req, res) => { 
    let sql = 'SELECT * FROM products';
    connection.query(sql, (err, result) => { 
        if (err) throw err; 
        console.log(result); 
        res.send('produit reçus'); 
    }); 
});