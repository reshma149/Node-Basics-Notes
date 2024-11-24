const mysql = require('mysql')
const assert = require('assert')

//connection string
const conStr = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
})


//connection logic
conStr.connect(function(err){
    if(err)
        assert.deepStrictEqual(err,null)
    console.log(`mysql db connected`);
})