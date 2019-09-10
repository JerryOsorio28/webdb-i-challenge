const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

// server.get('/', (req, res) => {
//     res.send('Home endpoint it is up and running')
// })

//Add our accounts endpoint
const accountsEndpoint = require('./data/endpoints/accountsEndpoints')

//Have the server use our endpoint created
server.use('/api/accounts', accountsEndpoint)

module.exports = server;