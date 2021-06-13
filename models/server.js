const express = require('express');
const http = require('http')
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./socket');

class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.server = http.createServer( this.app );
    this.io = socketio( this.server, { /* Configuracion  */ } )
  }

  execute () {
    this.middleWares()
    this.socketConfig()
    this.server.listen( this.port, ()=>{ 
      console.log(`Server run in port: ${this.port}`) 
    });
  }

  middleWares () {
    const htmlClientRoot = path.resolve( __dirname, "../public" )
    const htmlClient =express.static(htmlClientRoot)
    this.app.use(htmlClient)
  }

  socketConfig () {
    new Sockets( this.io )
  }
}

module.exports = Server