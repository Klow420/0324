console.log("coucou toto");

// import du packer mysql pour pouvoir l'utiliser ici
import mysql from "mysql"
const connection = mysql.createConnection({
  host     : 'localhost',
  port : '8889',
  user     : 'root',
  password : 'root',
  database : 'rest',
  socket : '/Applications/MAMP/tmp/mysql/mysql.sock'
});
 
connection.connect((err)=> {
    if (err) throw err
    console.log("base de donnée connecté");
});