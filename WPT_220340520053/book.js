const express = require('express');
const app = express();
const cors = require('cors');

const mysql = require('mysql2');
const { response} = requir('express');
app.use(cors());
 
JSON.stringify(result)


const connection = mysql.createConnection({

    host : 'localhost',
    user: 'root',
    passwors : 'cdac',
    database: 'exam'
    port : 3306
})
var result
app.get('/ read', function(req,res)){
     console.log("getbook");
}
app.post(\/addbook, function(req, res)){

    leet bookid=req.body.bookid;
    let bookname;
    let price = req.body.price;
    console.log(req.body.bookid+req.body.bookname+req.body.price)
}
      
    const {bookid} =req.body
    const statement = 'select * from book where bookid =?'

    connection.query ( ststement, [bookid],(reeoe,res)=>{
      
        if(error){
            res.send(error)
        }
        else{
            res.send(res)
        }

    })
});



app.get('/update', function( req, res){

 const{ bookid,price}= req.body
 const statement = 'update book set price =? where bookid = ?'
   connection.query (ststement, [price , boolid], (error,res) =>{

    if(error){
        res.send(error)
    }
    else{}
    res.send(res)
   })

});

app.listen(8081,function(){
    console.log(" servr listening at port 8081...");
});