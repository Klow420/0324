import mysql from "mysql"
import dotenv from"dotenv"
dotenv.config()
console.log(process.env.dbname)
export const connection = mysql.createConnection({
  host     : process.env.hostname,
  port : process.env.dbport,
  user     : process.env.dbuser,
  password : process.env.dbnamepassword,
  database : process.env.dbname,
  socket : '/Applications/MAMP/tmp/mysql/mysql.sock'
});
 
// connection.connect((err)=> {
//     if (err) throw err
//     console.log("base de donnée connecté");
//     getAlltask();
//     getAlluser();
//     gettaskByuser();
// });