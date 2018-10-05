
var scrape = require('./scrape.js');
var save_data = require('./insert_results.js');
var fs = require('fs');
var http = require('http');

var server = http.createServer(function (request, response) {
    
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write("<center>");
    response.write("<h1>Welcome To Web Scrapping Project</h1>");
    response.write('<h4>We have collected data from Ebay website' 
    +'<a href="https://www.ebay.com/b/Cell-Phones-Smartphones/9355/bn_320094?_ipg=25" target="_blank">    Link  </a></h4>');

    response.write('<h4>Author: Akshay Chandrachood</h4>');
    response.write("___________________________________________________________________________________________<br><br>");
    response.write("</center>");

    try{
        console.log('Scrapping The Data Now..');
        scrape();
        console.log('Saving The Data Now..');
        save_data();
    }catch(err){
        console.log(err);
    } 

    fs.readFile('output.json', (err,data)=>{
        if(err) throw err;
        response.write(data);
    })
    
 });
 
server.listen(8080);
console.log('Server listening on port: 8080');

