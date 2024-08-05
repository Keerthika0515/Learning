var http=require('http');
var f=require('fs');
http.createServer(function(req,res){
    f.readFile('info.text',function(err,data){
        res.write(data);
        res.end();
    })
}).listen(8031)