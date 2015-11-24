var name, password, ip;
var usernames = {};
var socket = io.connect('http://127.0.0.1:5656');

/* namespace `chat` */
var chat = {
    //Esta función se ejecuta cuando el servidor nos avisa
	//que alguien se conectó
    addUser: function(message){
        //Limpiamos el div de usuarios
        $('#users').html("");

        for(i in message[1]){
            $('#users').append($('<li>').html('<img src="images/user.png" width="20" height"20" />&nbsp' + message[1][i]));
  		     usernames[i] = message[1][i];
        }
    },

    addUsers: function(){

        //Esta función se ejecuta cuando el servidor nos
	    //avisa que alguien se desconectó
        $('#users').html("");

        for (i in data[0]){

            $('#users').append($('<li>').html('<img src="images/user.png" width="20" height"20" />&nbsp' + data[0][i]));

            usernames[i] = data[0][i];
  	    }
    },

    messageProcessing: function(data){
        console.log(chat.addImg(data[1]));
        $('#messages').append($('<li>').append($('<p>').html('<strong>'+ data[0] + " dice:</strong> " + chat.addImg(data[1]) + '<small> - (' + data[2] + ')</small>')));
	    $('#messages').animate({scrollTop: $("#messages")[0].scrollHeight}, 100);
    },

    repeatUsername: function(){

        localStorage.removeItem("username");
	    alert("¡Lastima, ese nombre ya está ocupado!");
	    location.reload(true);

    },

    sendUsername: function(username){

        $('#signup').fadeOut();

        if(localStorage){
            localStorage.username = username;
        }

        socket.emit('adduser', username);
    },

    sendMessage: function(message){

        //Verificamos que no tenga scripts
        if((message.indexOf("<") != -1)){

            alert("Mensaje incorrecto");

        } else if ((message.indexOf(">") != -1)){

            alert("Mensaje incorrecto");

        } else if ((message.indexOf(";") != -1)){

            alert("Mensaje incorrecto");

        } else {
            //Limpiamos la caja del formulario
            $("#message").val("");

            console.log(message);

            //Enviamos un mensaje
            socket.emit('sendmessage', message);
	   }
   },
   addImg: function(value){

       console.log(typeof value);

       if (value.indexOf("#1") != -1 && value.indexOf("#10") != 0) {

           value = value.toString().replace('#1',' <img src="images/memes/yaoming.jpg" />');

       } else if (value.indexOf("#2") != -1) {

           value = value.toString().replace('#2','<img src="images/memes/lol.jpg" />');

       } else if (value.indexOf("#3") != -1) {

           value = value.toString().replace('#3','<img src="images/memes/like.jpg" />');

       } else if (value.indexOf("#4") != -1) {

           value = value.toString().replace('#4','<img src="images/memes/troll.jpg" />');

       } else if (value.indexOf("#5") != -1) {

           value = value.toString().replace('#5','<img src="images/memes/spiderman.jpg" />');

       } else if (value.indexOf("#6") != -1) {

           value = value.toString().replace('#6','<img src="images/memes/tenderness.jpg" />');

       } else if (value.indexOf("#7") != -1) {

           value = value.toString().replace('#7','<img src="images/memes/foreveralone.jpg" />');

       } else if (value.indexOf("#8") != -1) {

           value = value.toString().replace('#8','<img src="images/memes/challenge.jpg" />');

       } else if (value.indexOf("#9") != -1) {

           value = value.toString().replace('#9','<img src="images/memes/no.jpg" />');

       } else if (value.indexOf("#10") != -1) {

           value = value.toString().replace('#10','<img src="images/memes/geek.jpg" />');
       }

      return value;
   }
};


$(document).ready(function(){
    // Agregando y enviando username
    $('#form-name').on('submit', function(event){

        event.preventDefault();

        var flag = 0;

        var username = $('#name').val();

        for (var i = usernames.length - 1; i >= 0; i--) {

            if ( username === usernames) {
                flag = 1;
            }
        }

        if (flag === 0) {
            chat.sendUsername(username);
        } else {
            alert('El usuario ya esta en uso');
        }

    });

    //Formulario para enviar un nuevo mensaje
    $('#form-message').on('submit', function(event){

        event.preventDefault();

        var message = $('#message').val();

        chat.sendMessage(message);

    });

    // Cerramos sesión
    $('#logout').on("click", function(){

        localStorage.removeItem("username");

        location.reload(true);
	});

    //Manejamos lo que el servidor nos manda
	socket.on("message", chat.addUser);
	socket.on("newmessage", chat.messageProcessing);
	socket.on("useroffline", chat.addUsers);
	socket.on("errorname", chat.repeatName);
});
