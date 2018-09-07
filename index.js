const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const server = express();

//middleware
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan('dev'));

//routes
const actionRoute = require('./Routes/Action');
const projectRoute = require('./Routes/Project');


server.use('/actions', actionRoute);
server.use('/projects', projectRoute);
server.use('/', (req, res) => {
    res.send('Hello');
});
server.use()

server.listen(8000, () => console.log('\n== API on port 8k ==\n'));
