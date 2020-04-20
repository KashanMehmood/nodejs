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
// fs.readFile('ReadME.md', function(error, res) {
//     console.log(res.toString());
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
// const server = http.createServer((req,reponse) => {

//     reponse.setHeader('content-type','text/html');

//     if(req.url == '/'){
//         reponse.statusCode = 200;
//         reponse.write('Hello NodeJS');
//         reponse.write("<div>Current Url " + req.url + "</div>");
//     }else if(req.url == '/hello'){
//         reponse.write("hello url");
//         reponse.write("<div>Current Url " + req.url + "</div>");
//     }else{
//         reponse.write("wrong url");
//     }

//     reponse.end();
// });

// server.listen(3000);

//________________________________________Module__________________________________

// error is happening because we did not export am module from calculate.js
// beacuse we declare a funciton in calculate.js

// const cal = require('./calculate');

// console.log(cal);

// cal.add(3,4);
// cal.sub(10,4);
// cal.mul(10,4);

// cal.calculate.add(3,4);
// cal.calculate.sub(10,4);
// cal.calculate.mul(10,4);

//________________________________________Event__________________________________

// const events = require('events');
// const event = new events.EventEmitter();

// event.on('eTriggert', () => console.log("Event occur") );
// event.emit('eTriggert','Kashan Mehmood');

// event.on('eTriggert', (e) => console.log(e) );
// event.emit('eTriggert','Kashan Mehmood');

//________________________________________Express__________________________________

// const express = require('express');
// const app = express();

//_______________________________________static files_____________________________

// app.use('/static', express.static('./public'));

// static file load url
// http://localhost:3000/image/pic.png

// app.get('/checkimage', (req,res) => {
//     res.sendFile(__dirname + '/image.html');
// });

//_______________________________________static files_____________________________

// app.get('/', (req,res) =>{
//     res.send('Hello World');
// });

// app.get('/user', (req,res) =>{
//     res.send('Hello World ');
// });

// app.post('/user', (req,res) =>{
//     res.send('Hello World post method  ');
// });

// console.log("Current path " + __dirname);

//________________________________Routing Parameter________________________________

// app.get('/', (req, res) => {
//     res.send('Hello World ');
// });

// Reuired parameter

// app.get('/user/:userid', (req, res) => {
//     res.send('Hello user' + req.params.userid);
// });

// Optional parameter

// app.get('/user/:userid?', (req, res) => {

//     if(req.params.userid != undefined){
//         res.send('Specific User: ' + req.params.userid);
//     }else{
//         res.send('All Users');
//     }
// });

// Parameter range "from" to "to"

//- Hyphen notation

// app.get('/user/:from-:to', (req, res) => {

//     res.send('Routing Params: ' + req.params.from + '-' + req.params.to);
// });

// //- Dot notation

// app.get('/user/:from.:to', (req, res) => {

//     res.send('Routing Params: ' + req.params.from + '.' + req.params.to);
// });

//________________________________Routing Parameter________________________________

//____________________________________Middleware____________________________________

// const myMiddleware = (req, res, next) => {

// Example # 1
// if(req.url == '/user'){

//     console.log("Middleware Activated");
//     next();
// }else{
//     res.send('Wrong Route');
// }

// console.log(req.params.name);

//- Default ExpressJS way

// req.myMiddleware = Date.now();
// console.log('Time:', Date.now())

//- Default JS way
// req.myMiddleware = Date();
// console.log(req.myMiddleware);

// Example # 2
//     if (req.params.name == 'kashan') {

//         console.log('Middleware Activated, Params name: ' + req.params.name);
//     } else {
//         res.send('Wrong Route');
//     }

//     next();
// }

// app.use(myMiddleware);

// app.get('/user', (req, res) => {

//     res.send('Hello User' + req.url);
// });

// app.get('/about', myMiddleware, (req, res) => {

//     res.send('Hello About');
// });

// req.myMiddleware = Date.now();
// app.get('/users/:name', myMiddleware, (req, res) => {

//     res.send('Hello User check: ' + req.myMiddleware);
// });

//____________________________________Middleware____________________________________
//____________________________________Template Engine Pug____________________________________

//__Template Engine Pug

// app.set('views', './public/pages');
// app.set('view engine', 'pug');

// app.get('/', function (req, res) {
//     res.render('index', { title: 'Hey', message: 'Hello there!' })
//   })

//__Template Engine Pug

//__Template Engine Twig

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { check, validationResult } = require('express-validator');
const { matchedData, sanitize } = require('express-validator');
const { body } = require('express-validator');

app.set('views', __dirname + '/public/pages/');
app.set('view engine', 'twig');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('form')
});

app.post(
  '/',
  [
    check('fname', 'Error Occur in First Name').trim().isLength({ min: 5 }),
    check('lname', 'Error Occur in Last Name').trim().isLength({ min: 5 }),
    check('password', 'Error Occur in Password Length').trim().isLength({ min: 5 }),
    check('cpassword').custom((value, { req }) => {

      if (value !== req.body.password) {
        throw new Error('Password confirmation is incorrect');
      }

      return true;
    })

  ],
  (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {

      const user = matchedData(req);
      res.render('form', { errors: errors.mapped(), user: user });
      console.log(user);
      

    } else {
      // mapData: Returns an object of data that express-validator has validated or sanitized.
      const user = matchedData(req);
      res.render('about', { user: user });
    }

  },
);

//__Template Engine Pug

//____________________________________Template Engine Pug____________________________________

app.listen(3000, () => console.log('Server Running at http://localhost:3000/'))
