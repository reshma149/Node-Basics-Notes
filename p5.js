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
    let str=`INSERT INTO users(name,email,mobile,age) VALUES("JOHN","john@gmail.com","9087665544",24)`

    //exe
    conStr.query(str, function(err,data){
        if(err) assert.deepStrictEqual(err,null)
            console.log(`Value added successfully`);
 




    })
})














































































































































  