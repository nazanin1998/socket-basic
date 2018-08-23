var socket = io();

//when browser oppen this function will be called
socket.on('connect', function(){
  console.log('Conected to socket.io serever');
});

socket.on('message', function(message){
  console.log('new message :');
  console.log(message.text);
});

socket.on('test', function(test){
  console.log('test is this');
})
