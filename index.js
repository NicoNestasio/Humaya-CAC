//API Postres
fetch('https://sazonapi.hymsoft.repl.co/api/v1/recipies')
      .then(response => response.json())
      .then(postre => mostrarData(postre))
const min = 0; // Valor mínimo (inclusive)
const max = 100; // Valor máximo (inclusive)
const i = Math.floor(Math.random() * (max - min + 1)) + min;
const mostrarData = (postre) =>{
      console.log(postre)
      document.getElementById('imgreceta1').src= postre.data[0].imagen;
      document.getElementById('hreceta1').innerHTML=postre.data[0].nombre;
      document.getElementById('imgreceta2').src= postre.data[1].imagen;
      document.getElementById('hreceta2').innerHTML=postre.data[1].nombre;
      document.getElementById('imgreceta3').src= postre.data[2].imagen;
      document.getElementById('hreceta3').innerHTML=postre.data[2].nombre;
}
   //   var genero = gen(persona.results[0].gender);
    //   document.getElementById('nombre').innerHTML= persona.results[0].name.first;
    //   document.getElementById('apellido').innerHTML= persona.results[0].name.last;
    //   document.getElementById('imagen').src= persona.results[0].picture.large;
    //   document.getElementById('email').innerHTML= persona.results[0].email;
    //   document.getElementById('cel').innerHTML= persona.results[0].cell;
    //   document.getElementById('infop').innerHTML= "<li>Edad: " + persona.results[0].dob.age + " años</li>" + "<li>Género: " + genero + "</li>" + "<li>Nacionalidad: " + persona.results[0].nat + "</li>" + "<li>Residencia: " + persona.results[0].location.city + ", " + persona.results[0].location.state + ", " + persona.results[0].location.country + "</li>" +  "<li>ID: " + persona.results[0].id.name + " " + persona.results[0].id.value + "</li>"
