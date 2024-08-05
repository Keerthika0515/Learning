var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.appendFile('iqp.txt','Christ University',function(err,data){
        res.write("Data is appended");
        res.end()
    })
}).listen(8086)