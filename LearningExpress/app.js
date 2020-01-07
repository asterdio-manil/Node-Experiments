const express = require('express');         //  const express is a function that allows us to create express application.
const bodyParser = require('body-parser');
const fs = require('fs');
const writeF = (json) =>
    {
        fs.writeFile('./data/team.json', JSON.stringify(json), err => console.log("Erroe : ",err));           //  fs.writeFile() takes 3 arguments. 1> Path of file.    2> String to add to file.    3> A callback function for any errors that may occour.
    }

const app = express()         //  app.<sth> = express().<sth>
module.exports = app;           //  Set 'app' as an module which is exported so that other files can acess and use it. (e.g. :- ./bin/www uses the app module exported by this line of code).

console.log("Loading './data/team.json'");
const dat = require('./data/team.json');

app.use(bodyParser.json());         //  bodyParser.json() middleware function allows us to receive and parse JSON data through incoming request objects.

app.get(
        '/team',
        (request, response) =>
        {
            //console.log("These are the members of the team working on Project Auto")
            //response.send("These are the members of the team working on Project Auto");           //  response.send() is used to send data back as a response. 
            response.json(dat);            //  response.json() is a variation of response.send() used to send JSON formatted data.
            
        }
    );          //  app.get() has two arguments. The endpoint and the callback function.

app.get(
    '/random',
    (request, response) =>
    {
        //response.send("This is a random member of the team working on Project Auto"); 
      
        response.json(dat[Math.floor(Math.random() * dat.length)]);            
    }
);          

app.get(
    '/team/:id',            //  '/:id' indicates that a variable called id will be added to the endpoint.  
    (request, response) =>
    {
        console.log(request.params);
        
        response.json
        (
            dat.find
            (
                d => d.id == request.params.id
            )
        );            
    }
);          

app.post(
    '/team',            
    (request, response) =>
    {
        const {Name, Mobile} = request.body; 

        const personel = 
        {
            id: (dat.length > 0 ? dat.length : 0) + 1, 
            Name, 
            Mobile
        };

        console.log(personel);

        const newData = dat.concat(personel);

        writeF(newData);
        response.json(newData);
        
    }
);      

app.put(
    '/team/:id',            
    (request, response) =>
    {
        const id = request.params.id;           //  const {id} = request.params;      
        const {Name, Mobile} = request.body; 

        const outdated = dat.find( d => d.id == id); 
        
        if(Name)            //  If Name exists (i.e. :- isn't undefined)
        {
            outdated.Name = Name;
        
        }
        if(Mobile)
        {
            outdated.Mobile = Mobile;
        }

        writeF(dat);
        response.json(dat);
        
    }
);      

app.delete(
    '/team/:id',            
    (request, response) =>
    {
        const id = request.params.id;           //  const {id} = request.params;      
        const delTuple = dat.filter(d => d.id != id); 
        
        writeF(delTuple);
        response.json(delTuple);
        
    }
);      

