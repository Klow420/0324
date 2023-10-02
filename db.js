import mysql from "mysql"
export const connection = mysql.createConnection({
  host     : 'localhost',
  port : '8889',
  user     : 'root',
  password : 'root',
  database : 'rest',
  socket : '/Applications/MAMP/tmp/mysql/mysql.sock'
});
 
// connection.connect((err)=> {
//     if (err) throw err
//     console.log("base de donnée connecté");
//     getAlltask();
//     getAlluser();
//     gettaskByuser();
// });