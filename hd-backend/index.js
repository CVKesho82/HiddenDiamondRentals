const http = require('http');

const hostname = '127.0.0.1';
const port = '4000';//react server is 3000

//-------------------Express 
const express = require('express');
const app = express();
const server = http.createServer(app);
const router = express.Router();
app.use(express.json());

//------------------Sequlelize
const Sequelize = require('sequelize');
const { Homes } = require('./models');

//--------------------Body Parser
const bodyParser = require('body-parser');
const { userInfo } = require('os');

//---------------------Cors
const cors = require('cors');
app.use(cors({ origin: (orig, cb) => cb(null, true), credentials: true }));

//--------------------Initate the server
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//---------------------GET all Homes------------------//
app.get('/homes', async (req, res) => {
  const inventory = await Homes.findAll();
  res.json(inventory);
});

//-----------------------GET homes by ID----------------//

app.get('/homes/:id', async (req, res) => {
    try{
        const oneHome = await Homes.findByPk(req.params.id);
        res.json(oneHome);
    } catch (e) {
        console.log(e);
        res.status(404).json({
            message:'Home not found'
        });
    }
});

//-----------------------POST homes by ID----------------//

app.post('/homes', async (req, res) => {
        const home = await Homes.findAll({
            where: {
                id : req.body.term,
            }
        });
        res.json(home);
    });


