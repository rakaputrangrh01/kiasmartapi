var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'',
    user:'root',
    password:'',
    database:'dbkiasmart'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
})

module.exports = conn;