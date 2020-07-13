/* modulos, modelos y archivos requeridos */
const fs = require("fs");
const Covid = require("../model/paises.covid.model");
const hbs = require("../app/app.scraping");
/* GENERACIÓN DE FUNCIONES */

/* Operador de solicitud variable global*/
let datos;
let respuesta;
const a = "../app/covid-19/datos.json";
const b = "../app/covid-19/datosAux.json";

fs.exists("app/covid-19/datos.json", function (exists) {
  if (exists) {
    respuesta = "datos";
    datos = require(a);
  } else {
    respuesta = "datosAux";
    datos = require(b);
  }
});

/* Funcion de prueba */
const control = async (req, res) => {
  await res.send({
    message: "Conectado al servidor en peticion get...",
  });
  //await dropDataJson();
};

/* Funcion para la creacion de los datos de los paises */
const createData = (req, res) => {
 hbs();

  /* Definir variables para almacenar en la DB */
  let ind = [];
  //definir variable de los paises
  let pa = [];
  //definir variable para los casos
  let ca = [];
  //definir variable para la mortalidad
  let mo = [];
  //Definir variable para las muertes
  let mu = [];

  for (i = 0; i < 211; i++) {
if(datos[i].pais === "República Democrática del Congo "){
  datos[i].pais = "Rep. Dem. del Congo"
}

    ind[i] = datos[i].indicador;
    pa[i] = datos[i].pais;
    ca[i] = datos[i].casos;
    mo[i] = datos[i].mortalidad;
    mu[i] = datos[i].muertes;
  }

  Covid.remove((err, dataEncontrada) => {
    if (err) {
      res.status(500).send({
        message: "Server error ",
      });
    } else {
      if (!dataEncontrada) {
        res.status(200).send({
          message: "No fue posible encontrar los registros",
          statusCode: 400,
        });
      } else {

        let data = [];
for(i=0; i<211; i++){
  data[i] = new Covid({
    indicativo: ind[i],
    pais: pa[i],
    casos: ca[i],
    mortalidad: mo[i],
    muertes: mu[i],
  });
  
  data[i].save((err, newData) => {
    if (err) {
      console.log("Error en el servidor");
    } else {
      if (!newData) {
        console.log("No fue posible realizar el registro");
      } else {
        console.log(i+ ":" + " Registro, "+ pa[i] );
      }
    }
  });   
}      

        res.status(200).send({
          status: "Datos encotrados",
          datos: dataEncontrada,
          statusCode: 200,
          respuesta: {
            respuesta,
          },
          data: data,
        });
      }
    }
  });
};

function showData(req, res) {
  //VISUALIZAR
  //acceder a la informacion y usar la funcion find busca error  o los productos o datos que encunetre en la DB
  // se accede a la base de datos directamente
  Covid.find((err, dataEncontrada) => {
    if (err) {
      res.status(500).send({
        message: "Server error ",
      });
    } else {
      if (!dataEncontrada) {
        res.status(200).send({
          message: "No fue posible encontrar los registros",
          statusCode: 400,
        });
      } else {
        res.status(200).send({
          status: "Registros realizados",
          producto: dataEncontrada,
          statusCode: 200,
        });
      }
    }
  });
}

//borrar todos los datos de una coleccion de mongo.....
const dropAll = (req, res) => {
  //acceder a la informacion y usar la funcion find busca error  o los productos o datos que encunetre en la DB
  // se accede a la base de datos directamente
  Covid.remove((err, dataEncontrada) => {
    if (err) {
      res.status(500).send({
        message: "Server error ",
      });
    } else {
      if (!dataEncontrada) {
        res.status(200).send({
          message: "No fue posible encontrar los registros",
          statusCode: 400,
        });
      } else {
        res.status(200).send({
          status: "Datos encotrados",
          producto: dataEncontrada,
          statusCode: 200,
        });
      }
    }
  });
};
module.exports = { control, createData, showData, dropAll };
