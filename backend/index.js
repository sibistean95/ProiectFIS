import express from "express"
import mysql from "mysql"
import multer from "multer";

const app = express()

const storage = multer.memoryStorage();
const upload = multer({ storage: storage});

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

// endoint pentru a adauga o noua locatie
app.post('/listing', upload.single('photo'), (req, res) => {
    const { name, description, location, price_night, stars_number } = req.body;

    if(!name || !location || !price_night || !stars_number) {
        return res.status(400).json({ error: "All fields are required." });
    }

    const q = "INSERT INTO listing (name, description, location, price_night, stars_number, photo_url) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(q, [name, description, location, price_night, stars_number, photo_url], (err, result) => {
        if (err) {
            console.error("Error adding location:", err);
            return res.status(500).json({ error: "Error adding location." });
        }
        
        return res.status(201).json({ message: "Location added successfully." });
    });
})

// endpoint pentru a obtine toate locatiile
app.get('/listing', (req, res) => {
    const query = "SELECT * FROM listing";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error getting listing:", err);
            return res.status(500).json({ error: "Error getting listing." });
        }
        
        return res.json(results);
    });
});

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})