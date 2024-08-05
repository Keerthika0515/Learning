var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.unlink('info.txt',function(err){
        if(err) throw err;
        console.log('file deleted');
    })
}).listen(8089)