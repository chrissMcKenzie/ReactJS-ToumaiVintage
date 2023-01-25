const express = require('express')
const app = express()
const mysql = require('promise-mysql')

//const bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({ extended: false}))
//app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const connectionOption = {
    host: "localhost",
    database: "vintage_bases",
    user:"root",
    password: "",
    port: 3306
}

mysql.createConnection(connectionOption)

.then(async(db) => {
    app.get('/',function(req, res) {
        res.json('Bien connecté')
    })

    app.post('/product/add', async(req,res)=>{
        const name =req.body.name
        const price =req.body.price
        const responseDB = await db.query('INSERT INTO products (name,price) VALUES (?,?)',[name,price])
        res.json({status:200,responseDB})
    })

    app.get('/categories/:id', async (req,res) => {
        const categorie = await category.find()
        const  cat_with_id = categorie[req.params.id]
        if (cat_with_id == undefined)
            res.sendStatus(404)
        else
            res.send(categorie[req.params.id])
      })
    
    app.get('/categories' , async(req, res)=>{
        const result = await db.query('SELECT * FROM categories')
        if(result.length !== 0) {
        res.send(result);
        }
    });
})

app.listen(3000,() => {
    console.log(`j'ecoute sur le port 3000`)
})