var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.writeFile('iwp.txt','Hello world',function(err,data){
        res.write("Content are written to file");
        res.end();
    })
}).listen(8085)