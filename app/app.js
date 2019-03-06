/*eslint-env node*/

var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

var mysql = require('mysql');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/info', function (req, res) {
    
    var con = mysql.createConnection({
      host: "remotemysql.com",
      user: "mhJOLDRxsy",
      password: "trXOgghfWu",
      database: "mhJOLDRxsy"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM interventi118 order by anno desc, InterventoTipo", function (err, result, fields) {
        if (err) throw err;
          res.render("lista", {title:"lista interventi", message: "lista interventi ordinata per anno", list:result});
      });
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
