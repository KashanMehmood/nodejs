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


const http = require('http');
const server = http.createServer((request,reponse) => {

    reponse.setHeader('content-type','text/html');
    
    if(request.url == '/'){
        reponse.statusCode = 200;
        reponse.write('Hello NodeJS');
        reponse.write("<div>Current Url " + request.url + "</div>");
    }else if(request.url == '/hello'){
        reponse.write("hello url");
        reponse.write("<div>Current Url " + request.url + "</div>");
    }else{
        reponse.write("wrong url");
    }

    reponse.end();
});

server.listen(3000);
