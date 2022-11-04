var mysql =require("mysql")
var express=require("express")

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root@123',
    database:'company'
})

var app=express();

app.get("/getproducts",function(req,res){
    con.connect();
    con.query("select * from employee",function(err,records){
        res.send(records);
    })
})

app.listen(8080);
console.log('server started')