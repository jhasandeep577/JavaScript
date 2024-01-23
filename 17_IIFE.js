function chai(){
    console.log("DB-Connected")
}
chai();
/* ------------------------------------ IIFE( Immediately Invoked Function )--------------------------------*/

(function db(){                        // Synatx ( )()
    console.log("DB-Connection")
})();

// ----- Using ArrayFunction---------
((user)=>{console.log(`DBConnectionDoneby ${user}`)})('MYSQL')