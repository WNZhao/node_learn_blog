var settings = require('../settings');
Db = require('mongodb').Db,
Connection = require('mongodb').Connection,
Server = requrie('mongodb').Server;
module.exports = new Db(settings.db,new Server(settings.host,20000),{safe:true});
