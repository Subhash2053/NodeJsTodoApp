var events = require('events');
var fs = require('fs');

//var util = require('util');

// var Person  = function(name){
//  this.name = name;
// }

class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}

//util.inherits(Person,events.EventEmitter);

var Rahul = new Person('Rahul');
var Ram = new Person('Ram');

var people = [Rahul,Ram];

people.forEach(function(person){

person.on('speak',function(msg){

    console.log(person.name + ' said '+msg);

});


});

//Rahul.emit('speak','hlo bro');

//sync version
var data = fs.readFileSync('readme.txt','utf8');

fs.writeFileSync('new.txt',data);

//console.log(data);

//async version

// fs.readFile('readme.txt','utf8',function(err,data){
//     fs.writeFile('new1.txt',data,()=>{});

// });

//fs.mkdirSync('test');
//fs.rmdirSync('test');

//async
// fs.mkdir('test',function(){
//     fs.readFile('readme.txt','utf8',function(err,data){
//         fs.writeFile('./test/new1.txt',data,()=>{});
    
//     });
// });

fs.rmdir('test');


