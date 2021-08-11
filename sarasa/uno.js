function mostrar() {
  // datos de las mascotas
  
  let nombre;
  let tipo;
  let edad;
  let sexo;
  let preg;

  // informe A

  let promedioEdadReptiles = 0;
  let contEdadReptiles = 0;
  let acumEdadReptiles = 0;

  // datos B
  let edadMascotaJoven;
  let tipoMascotaJoven;
  let sexoMascotaJoven;
  let flag = 1;

  // datos C
  let contadorTotal = 0;
  let acumAves = 0;
  let porcentajeAves = 0;

  // datos D
  let contMamiferos = 0;
  let contAves = 0;
  let mayorCantidad;
  let contMayorcantidad = 0;
  do {
  
    
    nombre = prompt("Ingrese nombre de la mascota (entre 3 y 8 caracteres").toLowerCase();
        while (!(nombre.length >= 3 && nombre.length <= 8)){ 

          nombre = prompt("Error. Intente nuevamente").toLowerCase();
        }
    tipo = prompt ("Ingrese Tipo (Mamifero/Ave / reptil)").toLowerCase();
       while (!(tipo == "mamifero" || tipo == "ave" || tipo == "reptil")){
          
          tipo = prompt ("Error, Intente escribir uno de los 3 tipos dados").toLowerCase();
       }
      
       
      

    edad = parseInt(prompt("Ingrese edad de la mascota"));
       while (edad<0){ 
         
        edad = parseInt(prompt("Error. Intente nuevamente"));

       }
      

    sexo = prompt("ingrese sexo de la mascota (f o m)");
        while (sexo != 'f' && sexo != 'm'){
          sexo = prompt ("error. intente nuevamente");
        }

        if (flag || edad < edadMascotaJoven){
          tipoMascotaJoven = tipo;
          sexoMascotaJoven = sexo;
          edadMascotaJoven = edad
          flag = 0;
         }

        if (tipo){
          contadorTotal++;
        }

        if (tipo == "reptil"){
          contEdadReptiles++; 
          acumEdadReptiles += edad;
 
        } else if(tipo == "ave")
        {
          acumAves += tipo
          contAves ++;
        
        } else {
          contMamiferos++;

        }

     preg = prompt("Desea ingresar datos de otra mascota?").toLowerCase();
  } while (preg == "si")

  /////////////
  
  if (contEdadReptiles != 0){

    promedioEdadReptiles = acumEdadReptiles / contEdadReptiles;

  } 

  if (contadorTotal != 0){
        
  porcentajeAves = acumAves * 100 / contadorTotal;
  }

  if (contAves > contEdadReptiles  && contAves > contMamiferos) {

     mayorCantidad = "Aves";
     contMayorcantidad = contAves;

  } else if (contMamiferos > contEdadReptiles && contMamiferos > contAves){
    mayorCantidad = "mamiferos";
    contMayorcantidad = contMamiferos;
  } else {
    mayorCantidad = "reptiles"
    contMayorcantidad = contEdadReptiles;
  }      
  





  alert ("El promedio de edad de los reptiles es " + promedioEdadReptiles);

  alert ("El sexo de la mascota mas joven es " + sexoMascotaJoven + " y el tipo es "+ tipoMascotaJoven);

  alert ("El total de aves es "+ porcentajeAves);
  
  alert ("hay mas cantidad del tipo " + mayorCantidad);
}


