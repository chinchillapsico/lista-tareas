var listaTareas = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  }];
  

// Click on a close button to hide the current list item
/*r close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}*/


// esta función agrega un check cuando se marca una tarea (si ya está hecha)
//document.querySelector selecciona el primer elemento y lo tacha, luego el usuario tacha el resto de tareas

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false); 

// agregar nuevo elemento a la lista
function agregarTarea() {
  var li = document.createElement("li");
  var nuevaTarea = document.getElementById("myInput").value;//variable del nuevo valor a ingresar
  var t = document.createTextNode(nuevaTarea);//con esta variable creo un texto para agregar a la lista
  li.appendChild(t);// agrego el nuevo elemento a  la lista con appendChild (al nodo padre)
  if (nuevaTarea === '') { //si no se ingresa una nueva tarea genero una alerta
    alert("¡Debes agregar una nueva tarea!");
  } else {
    document.getElementById("myUL").appendChild(li); //si agrega una nueva tarea esta se agrega al final de la lista
  }
   }

 for (i=0; i < 10;i++)
{
 listaTareas.push(arr[i])
}

listaTareas.forEach(function(el){
  document.write("<li>" + el.userId + el.id + " " + el.title + "/ " + el.completed + "</li>");
  });
 /*cript>
        var cajaDondeVoyAGuardar = document.getElementById("myUL");
        var todosLosA = document.getElementsByTagName("");
        var totalA = todosLosA.length;
        cajaDondeVoyAGuardar.innerHTML  = totalA;
    </script>*/