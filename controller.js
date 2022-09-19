'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index =  function(req, res){
    response.ok("aplikasi REST API ku berjalan!",res)

};

//menampilkan admin merchant
exports.tampilsemuaadmin = function(req, res){
    connection.query('SELECT * FROM users', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
}; 

// menampilkan id admin merchant
exports.tampilberdasarkanid = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM users WHERE id_admin = ?', [id],
    function(error, rows, fileds){
        if (error){
            console.log(error);
        }else {
            response.ok(rows, res);
        }
    });
};

//menambahkan data admin
exports.Tambahadmin = function(req, res){
    var nama = req.body.nama;
    var email = req.body.email;
    var password = req.body.password;
    var level_id = req.body.level_id;

    connection.query( 'INSERT INTO users (nama,email,password,level_id) VALUES(?,?,?,?)',
    [nama, email, password, level_id],
    function(error, rows, fileds){
        if(error){
            console.log(error);
           }else {
            response.ok("berhasil menambahkan data!",res);
           }
     });   
}; 