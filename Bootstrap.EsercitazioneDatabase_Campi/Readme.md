inizializzare un nuovo progetto npm utilizzando il comando npm init -y.
Installare il framework Express utilizzando il comando npm install express.
Installare il pacchetto sqlite3 utilizzando il comando npm install sqlite3.
Creare un nuovo file chiamato index.js.
Creare una cartella chiamata public. All'interno della cartella public, creare i file statici come ad esempio HTML
All'interno del file HTML, inserire un form con diversi input e un bottone di tipo "submit".
Utilizzare Bootstrap per dare uno stile alla pagina.
All'interno del file JavaScript, prendere i contenuti del form dalla pagina HTML utilizzando gli ID e salvarli in delle variabili.
Passare le variabili ad app.js utilizzando la funzione xhr.send() e inserendo i nomi delle variabili nei campi corrispondenti.
Il file app.js contiene un'istanza di Express chiamata app.post('/submit', (req, res)), che prende come input i dati passati dal file index.js.
All'interno di app.post ci sono due funzioni: la prima per stampare le variabili ricevute in input sulla console e la seconda per mostrarle sulla pagina web.
Utilizzare la funzione app.listen(3000, () => {}) per aprire la pagina web sulla porta 3000.
Utilizzare il comando node NOME.js per aprire il progetto su http://localhost:3000/.