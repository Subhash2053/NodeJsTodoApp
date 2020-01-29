const express = require('express');
const bodyParser = require('body-parser');
let todoController = require('./controllers/todoController');

const app = express();

// set up template engine
app.set('view engine','ejs');


//static files
//app.use('/assets',express.static('assets'));
app.use(express.static('./public'));

// fire controllers
todoController(app);

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