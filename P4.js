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
    let str=`ALTER TABLE user ADD age int(10) NOT NULL`

    //exe
    conStr.query(str, function(err,data){
        if(err) assert.deepStrictEqual(err,null)
            console.log(`table altered`);


    })
})













































































