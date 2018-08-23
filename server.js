var PORT = 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

//listen for event
io.on('connection',function(socket){
  console.log('User connected via socket.io!');

  socket.on('message', function(message){
    console.log('message recieved: '+message.text);

    //send message to every body include your self
    //io.emit

    //send message to evrey body exept you
    socket.broadcast.emit('message', message);
  });

  socket.on('test',function(test){
    console.log('test is '+test);
  });
  socket.emit('message',{
    text: "Welcome to the chat application "
  });

});

http.listen(PORT, function(){
  console.log('Server is started on port '+PORT);
});
