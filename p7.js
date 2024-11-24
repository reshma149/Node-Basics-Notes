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
    let str=`SELECT * FROM user`

    //exe
    conStr.query(str, function(err,data){
        if(err) assert.deepStrictEqual(err,null)
            console.log(`output=`,data);
        console.log(`output=`,JSON.stringify(data));

















































         

















          























































































































         





















































































































    
 


























































    })
})














































































































































  
