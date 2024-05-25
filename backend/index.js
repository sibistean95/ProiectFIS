import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "MySQLdatabase9501",
    database:"travelease_database"
})

app.get("/", (req,res)=> {
    res.json("Hello this is the backend")
})

app.get("/user", (req,res)=> {
    const q = "SELECT * FROM user"
    db.query(q, (err,data)=> {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/user", (req, res)=> {
    const q = "INSERT INTO user ('username', 'email', 'phone', 'address', 'password') VALUES (?)"
    const values = ["username from backend", "email from backend", "phone from backend", "address from backend", "password from backend"]

    db.query(q, [values], (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})