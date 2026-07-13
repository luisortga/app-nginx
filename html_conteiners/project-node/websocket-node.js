// server.js
const { WebSocketServer } = require('ws');

// Creamos el servidor de WebSockets en el puerto 8080
const wss = new WebSocketServer({ port: 8080 });

console.log('Servidor WebSocket corriendo en ws://localhost:8080');

// Escuchamos cuando un cliente se conecta
wss.on('connection', (ws) => {
  console.log('¡Nuevo cliente conectado!');

  // Enviamos un mensaje de bienvenida al cliente que se acaba de conectar
  ws.send('Bienvenido al servidor WebSocket');

  // Escuchamos los mensajes que envíe este cliente específico
  ws.on('message', (data) => {
    // Los datos suelen llegar como Buffer, los convertimos a texto legible
    const mensajeTexto = data.toString();
    console.log(`Mensaje recibido del cliente: ${mensajeTexto}`);

    // Respondemos de vuelta al cliente (Eco)
    ws.send(`Servidor recibió tu mensaje: "${mensajeTexto}"`);
  });

  // Escuchamos cuando el cliente se desconecta
  ws.on('close', () => {
    console.log('El cliente se ha desconectado');
  });
});
