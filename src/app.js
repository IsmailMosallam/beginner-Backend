const express = require('express')
const path = require('path')
const MongoClient = require('mongodb');
const app = express()

const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';


MongoClient.connect(url, (err, client) => {
    console.log("Connected successfully to server");

    const db = client.db(dbName)

    client.close();
})


app.listen(3000, () => {
    console.log("welcome to Server 30000 .....")
})