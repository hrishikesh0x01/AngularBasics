/**
 * To get started install
 * express bodyparser jsonwebtoken express-jwt
 * via npm
 * command :-
 * npm install express body-parser jsonwebtoken express-jwt --save
 */

// Bringing all the dependencies in
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');

// Instantiating the express app
const app = express();

// See the react auth blog in which cors is required for access
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// INstantiating the express-jwt middleware
const jwtMW = exjwt({
    secret: 'keyboard cat 4 ever',
    algorithms: ['HS256']
});

// MOCKING DB just for test
let users = [
    {
        id: 1,
        email: 'patelhrishikesh2000@gmail.com',
        password: 'N00b!1%5'
    },
    {
        id: 2,
        email: 'test2',
        password: 'asdf12345'
    }
];

// LOGIN ROUTE
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Use your DB ORM logic here to find user and compare password
    let loginStatus = -1;
    for (let user of users.entries()) { // I am using a simple array users which i made above
        if (email == user[1].email && password == user[1].password) {
            loginStatus = user[0];
            break;
        }
    }
    if (loginStatus != -1) {
        //If all credentials are correct do this
        let token = jwt.sign({ id: users[loginStatus].id, email: users[loginStatus].email }, 'keyboard cat 4 ever', { expiresIn: 129600 }); // Sigining the token
        res.json({
            sucess: true,
            err: null,
            token: token
        });
    }
    else {
        res.status(401).json({
            sucess: false,
            token: null,
            err: 'Email or password is incorrect'
        });
    }
    return res;
});

app.get('/check-auth', jwtMW /* Using the express jwt MW here */, (req, res) => {
    res.send({
        msg: 'You are authenticated',
        status: true
    }); //Sending some response when authenticated
});

// Error handling 
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
        res.status(401).send(err);
    }
    else {
        next(err);
    }
});

// Starting the app on PORT 3000
const PORT = 3001;
app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Magic happens on port ${PORT}`);
});