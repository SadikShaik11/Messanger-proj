const exp = require('constants');
const express = require('express');
const msgs= require('./routes/msg')
const router = express.Router();

const parsed = require('body-parser');
const bodyParser = require('body-parser');

const ex = express();
ex.use(bodyParser.urlencoded())
ex.use(msgs)
ex.use((req,res,next)=>{
    
    res.send('<h1>Error 404 Files Not Found</h1>')
})

ex.listen(3000)