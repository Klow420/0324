console.log("coucou toto");
import {getAlltask, getAlluser, gettaskByuser, editAllTaskByNameUser, addTaskToUser} from './controllers/task.js'
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
    // getAlltask();
    // getAlluser();
    // gettaskByuser();
    // editAllTaskByNameUser();
    // addTaskToUser(2, "repos", 1, 1);
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
import  express  from 'express';
const app = express()
const port = 3000

// faire un fetch
import axios from 'axios';

app.set("view engine", "ejs");
app.get('/', async (req, res) => {
    try {
        // Fetch data from the remote API
        const response = await axios.get('https://api.jikan.moe/v4/anime?q=&sfw');
        
        // Access the response data directly using response.data
        const data = response.data.data; // Assuming 'data' is an array of movies
        
        // Render the EJS template with the movie data
        res.render('index', { movies: data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// pour avoir le front
// app.set("view engine", "ejs");
// app.get("/display", (req, res) => {
//     res.render("index");
// })
// pour commencer à faire du json sur la page
// app.get('/', (req, res) => {
//     res.json({
//         id : 1,
//         user : "Anthony",
//         age : 27
//     })
// })

app.listen(port, () => {
  console.log(`Example apps listening on port ${port}`)
})