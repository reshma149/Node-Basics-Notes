const mysql = require('mysql')
const assert = require('assert')

//connection string
const conStr = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'userdb'
})


//connection logic
conStr.connect(function(err){
    if(err)
        assert.deepStrictEqual(err,null)
    console.log(`mysql db connected`);

    //sql query
    let str=`CREATE TABLE user(id int(10) AUTO_INCREMENT, name varchar(50) NOT NULL,email VARCHAR(50) NOT NULL, mobile varchar(40), PRIMARY KEY(id))`

    //exe
    conStr.query(str, function(err,data){
        if(err) assert.deepStrictEqual(err,null)
            console.log(`table created`);


    })
})