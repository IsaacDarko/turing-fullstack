const express = require('express');
const mysql = require('mysql');
const config = require('config');

const app = express();

const db = mysql.createConnection(config.sqlConnect);

db.connect( (err)=> {
    if(err){
        throw err
    }
    console.log('Connected to database successfully');
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Server is now listening in on ${port}`));