const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//let data = [{item: 'get milk'},{item: 'walk dog'},{item:'kick some coding ass'}];
let urlencodedParser = bodyParser.urlencoded({ extended: false })


//Connect to the database
mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true,useUnifiedTopology: true });

// Create a Schema - this is like blueprint
let todoSchema  = new mongoose.Schema({
item: String
});

let Todo = mongoose.model('Todo',todoSchema);

// let itemOne = Todo({item:'aaaaaaaaabboo'}).save(function(err){
// if(err) throw err;

// console.log('success');
// });
module.exports = function (app){

    app.get('/todo',function(req,res){

        
        // get data from monogodb and pass to view
         Todo.find({},function(err,data){
            if(err) throw err;

            res.render('todo',{todos:data});

        });

      
    });

    app.post('/todo',urlencodedParser,function(req,res){

        //console.log(req.body);
         // get data from the view and add it to mongodb
         let newTodo = new Todo({item:req.body.item.trim()}).save(function(err,data){
             if(err) return console.error(err); 
            
             res.json(data);
             });

       // data.push(req.body);
       

    });

    app.delete('/todo/:item',function(req,res){
        //console.log(req.params.item.trim());
// delete requested item from mongodb
Todo.find({item:req.params.item.trim()}).deleteOne(function(err,data){
    if(err) throw err;
            
    res.json(data);
});

        // data = data.filter(function(todo){
        //     return todo.item.replace(/\s/g, '') !== req.params.item;
        // });
        // res.json(data);
    });
};