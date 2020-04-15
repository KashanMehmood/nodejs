// console.log("hello");
// for (let index = 0; index < 10; index++) {
    // console.log(index);
    // alert("Hello");
    // document.write("hello");
// }

// console.log(__dirname);
// console.log(__filename);

// const name = "kashan";
// const age = 20;

// console.log("my name is %s", name);
// console.log(`my name is ${name}`);

// __________________________________________________________________________
// const fs = require('fs');
// console.log(fs);

// unlink, unlinkSync Methods

// const data = fs.readFileSync('ReadME.md');
// console.log(data.toString());
// console.log("File Readed Successfully");
// Output
// Synchronous call back
// it will print File content first then log message.


// __________________________________________________________________________
// const fs = require('fs');
// fs.readFile('ReadME.md', function(error, response) {
//     console.log(response.toString());
//     // res.writeHead(200, {'Content-Type': 'text/html'});
//     // res.write(data);
//     // res.end();
// });
// console.log("File closed");

// Output
// Asynchronous call back
// it will print File closed first then file content.

// __________________________________________________________________________
// const http = require('http');
// const server = http.createServer((request,reponse) => {

//     reponse.setHeader('content-type','text/html');
    
//     if(request.url == '/'){
//         reponse.statusCode = 200;
//         reponse.write('Hello NodeJS');
//         reponse.write("<div>Current Url " + request.url + "</div>");
//     }else if(request.url == '/hello'){
//         reponse.write("hello url");
//         reponse.write("<div>Current Url " + request.url + "</div>");
//     }else{
//         reponse.write("wrong url");
//     }

//     reponse.end();
// });

// server.listen(3000);


//________________________________________Module__________________________________

// error is happening because we did not export am module from calculate.js
// beacuse we declare a funciton in calculate.js

const cal = require('./calculate');

// console.log(cal);

// cal.add(3,4);
// cal.sub(10,4);
// cal.mul(10,4);

cal.calculate.add(3,4);
cal.calculate.sub(10,4);
cal.calculate.mul(10,4);