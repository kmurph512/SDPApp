const express = require('express')
const db = require("./database.js")
const app = express()

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}var path = __dirname + '/public/'

app.use(express.static(path));

app.get('/', (req, res) => res.sendFile(path + 'home.html'))

app.get('/login/verify', function (req, res) {
    res.sendFile(path + "login.html")
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
