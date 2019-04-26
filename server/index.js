require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const houseCtrl = require('./controller/houseCtrl')

const {SERVER_PORT,CONNECTION_STRING} = process.env


app.use(express.json());

massive(CONNECTION_STRING).then(db=>{
    app.set('db',db);
    app.listen(SERVER_PORT,()=>console.log('listening on port', SERVER_PORT))
}).catch(err=>console.log('err on connection',err))

app.get('/api/houses',houseCtrl.getHouses)
app.delete('/api/houses/:id',houseCtrl.deleteHouse)
app.post('/api/houses',houseCtrl.createHouse)