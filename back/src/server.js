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
    database: "vintages_bases",
    user:"root",
    password: "",
    port: 3306
}

mysql.createConnection(connectionOption)

.then(async(db) => {
    app.get('/',function(req, res) {
        res.json('Bien connecté')
    })

    // Recupération de tous les produits
    app.get('/products' , async(req, res) => {
        const result = await db.query('SELECT * FROM products')
        if(result.length !== 0) {
         res.send(result);
        }
     });

    //  Insérer un produit
    app.post('/product/add', async(req,res)=>{
        const title =req.body.title
        const description =req.body.description
        const price =req.body.price
        const imgSrc =req.body.imgSrc
        const category =req.body.category
        const responseDB = await db.query('INSERT INTO products (title, description, price, imgSrc, category) VALUES (?,?,?,?,?)',[title, description, price, imgSrc, category])
        res.json({status:200,responseDB})
    })

    // Recupérer les données d'un utilisateur par id (profil)
    app.get('/users/:id', async (req,res) => {
        const responseDB = await db.query("SELECT * FROM users WHERE id = ? ",[req.params.id])
        res.json({status:200, responseDB})
    });




    app.post('/ordered', async(req,res)=>{
        const id_users =req.body.id_users
        const id_products =req.body.id_products
        const Quantite =req.body.Quantite
        const Price=req.body.Price
        const Date_Commande =req.body.Date_Commande
        const responseDB = await db.query('INSERT INTO products (id_users, id_products, Quantite, Price, Date_Commande) VALUES (?,?,?,?,?)',[id_users, id_products, Quantite, Price, Date_Commande])
        res.json({status:200,responseDB})
    })




   
})

app.listen(3000,() => {
    console.log(`j'ecoute sur le port 3000`)
})