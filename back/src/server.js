const express = require('express')
const app = express()
const mysql = require('promise-mysql')

const cors = require('cors')
app.use(cors())

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
    
    // Enregistrer une commande

    // app.post('/ordered/add', async(req,res)=>{
    //     const id_users =req.body.id_users
    //     const id_products =req.body.id_products
    //     const Quantite =req.body.Quantite
    //     const Price=req.body.Price
    //     const Date_Commande =req.body.Date_Commande
    //     const responseDB = await db.query("INSERT INTO ordered (id_users, id_products, Quantite, Price, Date_Commande) VALUES (?,?,?,?,?)",[id_users, id_products, Quantite, Price, Date_Commande])
    //     res.json({status:200,responseDB})
    // })
})

app.listen(3000,() => {
    console.log(`j'ecoute sur le port 3000`)
})