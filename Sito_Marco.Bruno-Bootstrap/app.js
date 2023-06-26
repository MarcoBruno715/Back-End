const express = require('express');//prova    1111
const app = express();

//prerequisiti:
//npm install ajax
//npm install querySelector
//creare cartella files statici "public"
//mettere in "public" sia "html" che "script.js"
//Errori di sintassi

app.use(express.urlencoded({ extended: true})); //Deserializzi anche l'url nel quale risiede il form
//extended true verifica che i valori contenuti nel form  non siano solamente stringhe ma valori 
app.use(express.json()); // le info vengono inviate come array json e quindi devono essere deserializzate
app.use(express.static('public')); //   Express crea una rotta "public" che serve i files statici 

app.post('/submit', (req, res) => //submit è la rotta alla quale viene inviato il modulo sul server 
{
  const { name, email, message } = req.body; // richiama le informazioni dei campi del form 

  console.log(`Nome: ${name}, Email: ${email}, message: ${message}`);

  res.send(`Dati ricevuti! Nome: ${name}, Email: ${email}, message: ${message}`); // conferma in post le recezione dei dati 

});

app.listen(3000, () =>
{
    console.log('Il server è in ascolto sulla porta 3000!');
});