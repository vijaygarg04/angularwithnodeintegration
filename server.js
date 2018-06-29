var express= require('express');
var app= express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.get('/',function(req,res){
    res.send("vijus")
})
app.get('/something',function(req,res){
    var data =[
    {
        "id":1,
        "name":"vijay",
        "age":20
    },

    {
        "id":2,
        "name":"vikas",
        "age":19
    },

    {
        "id":3,
        "name":"vinay",
        "age":17
    },

    {
        "id":4,
        "name":"dheer",
        "age":16
    },

    {
        "id":5,
        "name":"hanu",
        "age":21
    }
]

data=JSON.stringify(data);

res.send(data);
})

app.listen(4444,function(){
    console.log("SERVER STARTED AT 4444");
    
    });