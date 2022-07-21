const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'

};

const mysql = require('mysql2')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
    let strNames = ""
    saveNames()
    connection.connect(function(err) {
        connection.query("select * from people", function (err, result) {
            if (err) throw err;
            Object.keys(result).forEach(function(key) {
                strNames += result[key].id + " -> " + result[key].name + "<br>"
            });
            res.send('<h1>Full Cycle Rocks!</h1><br>' + strNames)
        });
    });
})

app.listen(port, () => {
    console.log('Rodando na porta', port)
})

function saveNames() {
    let names = ["Wellington","Indira","Elio","Sandra","Priscila","Denis"];

    names.forEach(name => {
        const sql = "INSERT INTO people(name) values('"+name+"')"
        console.log(sql)
        connection.query(sql)
    })
}