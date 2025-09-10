const express = require('express');
const app = express();
// third party middleware
const morgan = require('morgan');
//own middleware
const logger = require('./logger')
const authorize = require('./authorize')
let people = require('./data')
// req => middleware => res
// invoke logger for any route after api
// app.use('/api', logger);

// invoke logger for any route
// app.use(logger);

// use more than one middleware function
// app.use([logger, authorize]);

//setup static and middleware
// app.use(express.static('./public'));

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/api/products', (req, res) => {
    res.send('Products');
})

app.get('/api/items', (req, res) => {
    console.log(req.user);
    res.send('Items');
})

app.get('/api/people', (req,res) => {
    res.status(200).json({success:true, data:people})
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000......")
})