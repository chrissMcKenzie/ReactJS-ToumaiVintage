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

    app.post('/products/add', async(req,res)=>{
        const name =req.body.name
        const price =req.body.price
        const responseDB = await db.query('INSERT INTO products (name,price) VALUES (?,?)',[name,price])
        res.json({status:200,responseDB})
    })
})

app.listen(3005,() => {
    console.log(`j'ecoute sur le port`)
})