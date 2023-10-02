import{connection} from '../db.js'

export function getAlltask() {
    
    const select = "SELECT * FROM user";
    connection.query(select, (err, result)=> {
        if (err){
            console.error("erreur", err);
            return;
        }
    console.log('liste des utilisateurs');
    console.log(result)
});
}
//afficher les utilisateurs
export function getAlluser() {
    
    const select = "SELECT * FROM task";
    connection.query(select, (err, result)=> {
        if (err){
            console.error("erreur", err);
            return;
        }
    console.log('liste des taches');
    console.log(result)
});
}

export function gettaskByuser() {
    /* sélectionner la base puis dans tâche joindre avec user et je veux que le user.id soit égale au task.owner */
    const select = "SELECT * FROM task INNER JOIN user ON user.id = task.owner";
    connection.query(select, (err, result) => {
        if (err) {
            console.error("erreur", err);
            return;
        }
        console.log('liste des tâches par utilisateur ');
        console.log(result);
    });
}

export function editAllTaskByNameUser(id) {
    // Requête SQL pour récupérer toutes les tâches d'un propriétaire en fonction de son ID
    const selectQuery = "SELECT * FROM task WHERE owner = 1";
    
    // Exécute la requête avec l'ID du propriétaire en tant que paramètre
    connection.query(selectQuery, [id], (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des tâches de l'utilisateur", err);
            return;
        }
        
        console.log(`Tâches de l'utilisateur avec l'ID ${id = 1}:`);
        console.log(result);
        
        // Vous pouvez également mettre à jour la description ici si vous le souhaitez
        // if (description) {
        //     // Requête SQL pour mettre à jour la description
        //     const updateQuery = "UPDATE task SET description = ? WHERE owner = ?";
            
        //     // Exécute la requête de mise à jour avec les paramètres
        //     connection.query(updateQuery, [description, id], (updateErr, updateResult) => {
        //         if (updateErr) {
        //             console.error("Erreur lors de la mise à jour de la description", updateErr);
        //             return;
        //         }
                
        //         console.log(`Description mise à jour pour toutes les tâches de l'utilisateur avec l'ID ${id}.`);
        //         console.log(updateResult);
        //     });
        // }
    });
}

