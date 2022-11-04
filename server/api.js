var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

// this is mongo db server url
var url = "mongodb://127.0.0.1:27017";

// create a server side app using api application 
var app = express();

// this app should use cors related settings 
app.use(cors());

// now allow express to read the content coming from url , when we post data from client side 
// it has to come in the form of query string or form body , which we have to accept

// convert data into json
app.use(express.json())

// request is used here to get the data from client
// response is used here to sedn data to client
app.get("/getproducts", function (request, response) {

    //    err will return us an error if there is a failure in connection
    //  if no error , it will return clientObject with which we will connect & interact with database
    mongoClient.connect(url, function (err, clientObject) {
        var dbo = clientObject.db("productsdb");
        dbo.collection("tblproducts").find().toArray(function (err, documents) {
            if (!err) {
                response.send(documents);
            }
        })
    })
});
// here we will get data coming from form 
app.post("/addproduct", function (request, response) {
    mongoClient.connect(url, function (err, clientObject) {
        if (!err) {
            var dbo = clientObject.db("productsdb");
            var data = {
                id: parseInt(request.body.id),
                name: request.body.name,
                //  here price is coming in string format ( as coming from text field) , so convert it into number
                price: parseFloat(request.body.price),
                stock: request.body.stock
            }
            dbo.collection("tblproducts").insertOne(data, function (err, result) {
                if (!err) {
                    console.log("Record Inserted")
                }
            })
        }
    })
})



// listen means server starts listening , then only we can make a request 
app.listen(8080);



console.log('Server started: http://127.0.0.1:8080')



