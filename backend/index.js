import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8800;

const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

app.get("/", (req, res) => {
    res.json("bienvenue dans le backend");
})

app.get("/books", (req,res)=>{
    const q = "SELECT * FROM test.books;";

    db.query(q, (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)"; // correction ici
    const values = [
        req.body.title, 
        req.body.desc,
        req.body.cover
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Le livre a été créé");
    });
});

app.listen(PORT, () => {
    console.log(`Connexion au Backend sur le port ${PORT}`);
})