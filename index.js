console.log("coucou toto");
import {getAlltask, getAlluser, gettaskByuser, editAllTaskByNameUser} from './controllers/task.js'
import { connection } from './db.js';

// import du packer mysql pour pouvoir l'utiliser ici
// import mysql from "mysql"
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   port : '8889',
//   user     : 'root',
//   password : 'root',
//   database : 'rest',
//   socket : '/Applications/MAMP/tmp/mysql/mysql.sock'
// });
 
connection.connect((err)=> {
    if (err) throw err
    console.log("base de donnée connecté");
    getAlltask();
    getAlluser();
    gettaskByuser();
    editAllTaskByNameUser();
});
// afficher les tâches
// function getAlltask() {
    
//     const select = "SELECT * FROM user";
//     connection.query(select, (err, result)=> {
//         if (err){
//             console.error("erreur", err);
//             return;
//         }
//     console.log('liste des utilisateurs');
//     console.log(result)
// });
// }
// //afficher les utilisateurs
// function getAlluser() {
    
//     const select = "SELECT * FROM task";
//     connection.query(select, (err, result)=> {
//         if (err){
//             console.error("erreur", err);
//             return;
//         }
//     console.log('liste des taches');
//     console.log(result)
// });
// }

// function gettaskByuser() {
//     /* sélectionner la base puis dans tâche joindre avec user et je veux que le user.id soit égale au task.owner */
//     const select = "SELECT * FROM task INNER JOIN user ON user.id = task.owner";
//     connection.query(select, (err, result) => {
//         if (err) {
//             console.error("erreur", err);
//             return;
//         }
//         console.log('liste des tâches par utilisateur ');
//         console.log(result);
//     });
// }
