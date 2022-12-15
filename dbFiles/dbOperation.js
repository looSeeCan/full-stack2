/// an organized place to have our database specific commands

const config        =require("./dbConfig"),
        sql         =require("mssql");

const getEmployees = async(sso) => { /// get the data from the database
    try {
        // console.log(sso);
        let pool = await sql.connect(config);
        let employees = await pool.request().query(`SELECT * from Employee WHERE sso = ${sso}`);
        console.log(employees);
        return employees;
    }
    catch(error) {
        console.log(error);
    }
}

const createEmployees = async(employee) => { /// get the data from the database
    try {
        let pool = await sql.connect(config);
        let employees = await pool.request().query(`INSERT INTO Employee (sso, fullname, email, birth, pwd)
            VALUES (${employee.sso}, '${employee.fullname}', '${employee.email}', '${employee.birthday}', '${employee.password}')
        `);
        
        return employees;
    }
    catch(error) {
        console.log(error);
    }
}


module.exports = {
    getEmployees,
    createEmployees
}