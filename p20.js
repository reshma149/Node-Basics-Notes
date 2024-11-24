const http = require('http')

//templates
const server = http.createServer(function(req,res){
    //req=> handles the incoming data to server
    //res=> handles the outgoing data from server
    console.log(`url address=`,req.url);
    if(req.url === "/"){
        res.end(`<div>
            <nav>
            <a href="/>Home </a>
            <a href="/about>About </a>
            <a href="/contact>Contact </a>
            <a href="/shop>Shop </a>

            </nav>
            <section><h1>Welcome to home</h1>
            </section>
            </div>`)
    }
    else if(req.url === "/about")
    {
        res.end(`<div>
            <nav>
            <a href="/">Home</a>
            <a href="/about>About </a>
            <a href="/contact>Contact </a>
            <a href="/shop>Shop </a>
            </nav>
            
            <section><h1>Welcome to about</h1>
            </section></div>`)
    }
})

server.listen(4500,function(){
    console.log(`server is started , running @ http://localhost:${4500}`);
})