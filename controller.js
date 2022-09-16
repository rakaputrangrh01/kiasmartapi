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