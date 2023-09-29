//API Postres
fetch('https://sazonapi.hymsoft.repl.co/api/v1/recipies')
      .then(response => response.json())
      .then(postre => mostrarData(postre))
let i, j, k;

const mostrarData = (postre) => {

      const num = [];
      while (num.length < 3) {
            const num1 = Math.floor(Math.random() * (postre.data.length));
            if (!num.includes(num1)) {
                  num.push(num1);
            }
      }

      [i, j, k] = num;
      console.log("i:", i);
      console.log("j:", j);
      console.log("k:", k);
      console.log(postre)
      //Receta1
      document.getElementById('imgreceta1').src = postre.data[i].imagen;
      document.getElementById('hreceta1').innerHTML = postre.data[i].nombre;
      document.getElementById('preceta1').innerHTML = postre.data[i].descripcion_tipo;
      for (var f = 0; f < postre.data[i].ingredientes.length; f++) {
            var ingrediente = postre.data[i].ingredientes[f];
            var listItem = document.createElement('li'); // Crear un nuevo elemento li
            listItem.textContent = ingrediente.cantidad + ' de ' + ingrediente.nombre; // Establecer el contenido del li
            document.getElementById('ingredientesr1').appendChild(listItem);
        }
        document.getElementById('instruccionesr1').innerHTML = postre.data[k].instrucciones;
      //Receta2
      document.getElementById('imgreceta2').src = postre.data[j].imagen;
      document.getElementById('hreceta2').innerHTML = postre.data[j].nombre;
      document.getElementById('preceta2').innerHTML = postre.data[j].descripcion_tipo;
      for (var h = 0; h < postre.data[j].ingredientes.length; h++) {
            var ingrediente = postre.data[j].ingredientes[h];
            var listItem = document.createElement('li'); // Crear un nuevo elemento li
            listItem.textContent = ingrediente.cantidad + ' de ' + ingrediente.nombre; // Establecer el contenido del li
            document.getElementById('ingredientesr2').appendChild(listItem);
        }
        document.getElementById('instruccionesr2').innerHTML = postre.data[j].instrucciones;
      //Receta3
      document.getElementById('imgreceta3').src = postre.data[k].imagen;
      document.getElementById('hreceta3').innerHTML = postre.data[k].nombre;
      document.getElementById('preceta3').innerHTML = postre.data[k].descripcion_tipo;
      for (var r = 0; r < postre.data[k].ingredientes.length; r++) {
            var ingrediente = postre.data[k].ingredientes[r];
            var listItem = document.createElement('li'); // Crear un nuevo elemento li
            listItem.textContent = ingrediente.cantidad + ' de ' + ingrediente.nombre; // Establecer el contenido del li
            document.getElementById('ingredientesr3').appendChild(listItem);
        }
        document.getElementById('instruccionesr3').innerHTML = postre.data[k].instrucciones;
}