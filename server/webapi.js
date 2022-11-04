var mongoClient=require('mongodb').MongoClient;
var express=require("express")
var cors=require("cors");

var url="mongodb://127.0.0.1:27017";
var app=express();
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json());
app.use(cors());

app.get('/getcategories',function(req,res){
    mongoClient.connect(url,function(err,clientObject){
        if(!err){
            var dbo=clientObject.db("onlinestore")
            dbo.collection("tblcategories").find()
               .toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
               })
        }
    })
})

app.get('/getproducts',function(req,res){
    mongoClient.connect(url,function(err,clientObject){
        if(!err){
            var dbo=clientObject.db("onlinestore")
            dbo.collection("tblproducts").find()
               .toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
               })
        }
    })
})

app.get('/getproducts/:id',function(req,res){
    var id=parseInt(req.params.id);
    mongoClient.connect(url,function(err,clientObject){
        if(!err){
            var dbo=clientObject.db("onlinestore")
            dbo.collection("tblproducts").find({CategoryId:id})
               .toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
               })
        }
    })
})

app.get('/getproduct/:id',function(req,res){
    var id=parseInt(req.params.id);
    mongoClient.connect(url,function(err,clientObject){
        if(!err){
            var dbo=clientObject.db("onlinestore")
            dbo.collection("tblproducts").find({ProductId:id})
               .toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
               })
        }
    })
})

app.post("/addproduct", function (request, response) {
    mongoClient.connect(url, function (err, clientObject) {
        if (!err) {
            var dbo = clientObject.db("onlinestore");
            var data = {
                ProductId: parseInt(request.body.ProductId),
                Name: request.body.Name,
                Price: parseFloat(request.body.Price),
                CategoryId: parseInt(request.body.CategoryId)
            }
            dbo.collection("tblproducts").insertOne(data, function (err, result) {
                if (!err) {
                    console.log("Record Inserted")
                }
            })
        }
    })
})


app.listen(8080);
console.log("Server started");