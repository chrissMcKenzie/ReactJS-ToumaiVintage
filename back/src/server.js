const express = require('express')
const app = express()
const mysql = require('promise-mysql')
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors())
dotenv.config()

//const bodyParser = require('body-parser')
//app.use(bodyParser.urlencoded({ extended: false}))
//app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const connectionOption = {
    host: process.env.MYSQL_HOST_IP, //"localhost",
    port: process.env.MYSQL_PORT, //3307,
    user: process.env.MYSQL_USER, //"root",
    password: process.env.MYSQL_PASSWORD, //"",
    database: process.env.MYSQL_DATABASE //"vintages_bases",
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
    app.get('/User/:Email', async (req,res) => {
        const responseDB = await db.query("SELECT * FROM users WHERE Email = ? ",[req.body.Email])
        res.json({status:200, responseDB})
    });

    // Envoyer les données des utilisateurs à la base de données lors de l'inscription
    app.post('/users/add', async(req,res)=>{
        const Prenom =req.body.Prenom
        const Nom =req.body.Nom
        const Sexe =req.body.Sexe
        const Date_de_naissance =req.body.Date_de_naissance
        const Adresse =req.body.Adresse
        const Pays =req.body.Pays
        const Ville =req.body.Ville
        const Departement =req.body.Departement
        const Code_postal =req.body.Code_postal
        const Telephone =req.body.Telephone
        const Email =req.body.Email
        const Mot_de_passe =req.body.Mot_de_passe

        const responseDB = await db.query('INSERT INTO users (Prenom, Nom, Sexe, Date_de_naissance, Adresse, Pays, Ville, Departement, Code_postal, Telephone, Email, Mot_de_passe) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',[Prenom, Nom, Sexe, Date_de_naissance, Adresse, Pays, Ville, Departement, Code_postal, Telephone, Email, Mot_de_passe])
        res.json({status:200,responseDB})
    })
    
    // Enregistrer une commande:

      app.post('/ordered/add', async(req,res) => {
        const id_users = "1"
        const id_products =req.body.id_products
        const title = req.body.title
        const image = req.body.image
        const Price=req.body.Price
        const Quantite =req.body.Quantite
        const responseDB = await db.query("INSERT INTO ordered (id_users, id_products, title, image, Quantite, Price) VALUES (?,?,?,?,?,?)",[id_users, id_products, title, image, Quantite, Price])
        res.json({status:200,responseDB})
    })

    // app.post('/Token/Create', userController.createToken)
})

app.listen(process.env.REACT_APP_SERVER_PORT,() => {
    console.log(`j'ecoute sur le port ${process.env.REACT_APP_SERVER_PORT}`)
})


