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