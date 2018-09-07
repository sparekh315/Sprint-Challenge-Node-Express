const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

//middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

//routes




server.use('/', (req, res) => {
    res.send('Hello');
});

server.listen(8000, () => console.log('\n== API on port 6k ==\n'));
