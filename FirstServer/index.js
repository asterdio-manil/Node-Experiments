const http = require('http');           //  Using HTTP for data transfer

const hostname = 'localhost';           //  Since we are testing this on a local machine
const port = 3000;


const server = http.createServer(
                                    (request, response) =>
                                    {
                                        const url = request.url;            //  url = URL of the webpage after port no  (i.e. : endpoint).
                                        console.log(url);

                                        if(url === "/req")
                                        {
                                            console.log('Request :- \n\t',request);
                                                                    
                                            response.end("You are now in Req.");    
                                        }

                                        else if (url === "/translations") 
                                        {
                                            var translations = {
                                                1: 'one',
                                                2: 'two',
                                                3: 'three'
                                            };          //  An JS Object (or data in JSON format).
                                            
                                            response.setHeader('Content-Type','application/json');          //  Setting the 'Content-Type' property of the Response header to 'application/json'.

                                            response.write("You have reached Translations. \nThe translations are :- " + JSON.stringify(translations));         //  .write() displays data but dosent end the Response. //  JSON.stringify() translates JSON data to string data streams.
                                            
                                            response.end();         //  response.end() ends the response.
                                        } 
                                       
                                        response.end("Welcome to my first Node server.\nTry adding translations or req to the url.");
                                    }
                                )           //  .createServer() takes a callback function with two arguments (req and res).

server.listen(
                port, hostname, () =>
                                    {
                                        console.log(`Server running at [${hostname}:${port}].`);
                                    }
            );          //  .listen() takes a port no, hostname and an anonymous function (which determines what to do in case od a sucessful connection) as arguments. 
