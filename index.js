const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const port = process.env.port || 8080

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: "new_seq"
})

app.get('/user', (req, res) => {
    db.query("call get_user()", (err, result) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})

app.get('/employer', (req, res) => {
    db.query("call get_employer()", (err, result) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})

app.get('/department', (req, res) => {
    db.query("call get_department()", (err, result) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})

app.listen(port, () =>{
    console.log('server is running port : ' + port)
})