const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'novaventeDB'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to DB');
        return;
    }
    console.log('Connection established');
});