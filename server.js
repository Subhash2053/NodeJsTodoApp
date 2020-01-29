const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.set('view engine','ejs');

app.use('/assets',express.static('assets'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/',function(req,res){
    res.render('index');

})

app.get('/contact',function(req,res){
//console.log(req.query);
    res.render('contact',{data:req.query,success:false});

});
app.post('/contact',urlencodedParser,function(req,res){
    console.log(req.body);
    res.render('contact',{data:req.body,success:true});
})


app.listen('2000');