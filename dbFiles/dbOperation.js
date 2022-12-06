/// an organized place to have our database specific commands

const config        =require("./dbConfig"),
        sql         =require("mssql");

const getEmployees = async() => { /// get the data from the database
    try {
        let pool = await sql.connect(config);
        let employees = pool.request().query("SELECT * from Employee");
        console.log(employees);
        return employees;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getEmployees
}