const http = require('http')

//templates
const server = http.createServer(function(req,res){
    //req=> handles the incoming data to server
    //res=> handles the outgoing data from server
    console.log(`url address=`,req.url);
})

server.listen(4500,function(){
    console.log(`server is started , running @ http://localhost:${4500}`);
})