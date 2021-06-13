class Sockets {
  constructor ( io ) {
    this.io = io
    this.socketsEvents()
  }

  socketsEvents () {
    this.io.on('connection', (socket) => {

      socket.emit('welcome-message', {
        welcome: 'Bienvenido de nuevo 😉',
        msg: 'Power by Socket IO 🔌'
      })
    
      socket.on('client-message', ({msg})=>{
        this.io.emit('server-menssage', {
          msg
        })  
      })
    
    })
  }
}

module.exports = Sockets