const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('mydb.db');

//crea la tabella se non esiste
db.serialize(() => {
 //risolve il problema della tabella se gia creata
    db.run('CREATE TABLE IF NOT EXISTS mytable (name TEXT, Lname TEXT, email EMAIL, city TEXT, Zip TEXT, iscriviti BOOLEAN, State TEXT)');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Root per la pagina principale
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/public/index.html');
});

//Route per gestire il submit del form
app.post('/submit', (req, res) => {
    const { name, Lname, city, email, Zip, iscriviti, State } = req.body;    
    const stmt = db.prepare('INSERT INTO mytable VALUES (?, ?, ?, ?, ?, ?, ?)');
    stmt.run(name, Lname, city, email, Zip, iscriviti, State );
    stmt.finalize();
    res.send('Dati inseriti correttamente!');
});

//Avvia il server
app.listen(3000, () => {
    console.log('Server avviato sulla porta 3000');
});