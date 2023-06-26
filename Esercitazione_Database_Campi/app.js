const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydb.db');

//prerequisiti:
//npm install ajax
//npm install querySelector
//creare cartella files statici "public"
//mettere in "public" sia "html" che "script.js"
//Errori di sintassi


//crea la tabella se non esiste
db.serialize(() => {
  //risolve il problema della tabella se gia creata
     db.run('CREATE TABLE IF NOT EXISTS mytable (name TEXT, age INTEGER, city TEXT, email EMAIL, checkbox CHECKBOX , message MESSAGE)');
 });
 
 app.use(express.urlencoded({ extended: true }));
 app.use(express.static('public'));
 
 //Route per la pagina principale
 app.get('/', (req, res) => {
 
     res.sendFile(__dirname + '/public/index.html');
 });
 
 //Route per gestire il submit del form
 app.post('/submit', (req, res) => {
     const { name, age, city, email, message, checkbox } = req.body;
     const stmt = db.prepare('INSERT INTO mytable VALUES (?, ?, ?, ?, ?, ?)');
     stmt.run(name, age, city, email, message, checkbox);
     stmt.finalize();
     res.send('Dati inseriti correttamente!');
 });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.use(express.urlencoded({ extended: true})); //Deserializzi anche l'url nel quale risiede il form
//extended true verifica che i valori contenuti nel form  non siano solamente stringhe ma valori 
app.use(express.json()); // le info vengono inviate come array json e quindi devono essere deserializzate
app.use(express.static('public')); //   Express crea una rotta "public" che serve i files statici 

app.post('/submit', (req, res) => //submit è la rotta alla quale viene inviato il modulo sul server 
{
  const { name, email, message, iscriviti, lang  } = req.body; // richiama le informazioni dei campi del form 

  console.log(`Nome: ${name}, Email: ${email}, message: ${message}, iscriviti: ${iscriviti}, lang: ${lang}`);

  res.send(`Dati ricevuti! Nome: ${name}, Email: ${email}, message: ${message}, iscriviti: ${iscriviti}, lang: ${lang}`); // conferma in post le recezione dei dati 

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(3000, () =>
{
    console.log('Il server è in ascolto sulla porta 3000!');
});