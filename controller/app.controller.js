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
        const data = new Covid({
          indicativo: ind[0],
          pais: pa[0],
          casos: ca[0],
          mortalidad: mo[0],
          muertes: mu[0],
        });

        data.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data1 = new Covid({
          indicativo: ind[1],
          pais: pa[1],
          casos: ca[1],
          mortalidad: mo[1],
          muertes: mu[1],
        });

        data1.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data2 = new Covid({
          indicativo: ind[2],
          pais: pa[2],
          casos: ca[2],
          mortalidad: mo[2],
          muertes: mu[2],
        });

        data2.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data3 = new Covid({
          indicativo: ind[3],
          pais: pa[3],
          casos: ca[3],
          mortalidad: mo[3],
          muertes: mu[3],
        });

        data3.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data4 = new Covid({
          indicativo: ind[4],
          pais: pa[4],
          casos: ca[4],
          mortalidad: mo[4],
          muertes: mu[4],
        });

        data4.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data5 = new Covid({
          indicativo: ind[5],
          pais: pa[5],
          casos: ca[5],
          mortalidad: mo[5],
          muertes: mu[5],
        });

        data5.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data6 = new Covid({
          indicativo: ind[6],
          pais: pa[6],
          casos: ca[6],
          mortalidad: mo[6],
          muertes: mu[6],
        });

        data6.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data7 = new Covid({
          indicativo: ind[7],
          pais: pa[7],
          casos: ca[7],
          mortalidad: mo[7],
          muertes: mu[7],
        });

        data7.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data8 = new Covid({
          indicativo: ind[8],
          pais: pa[8],
          casos: ca[8],
          mortalidad: mo[8],
          muertes: mu[8],
        });

        data8.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data9 = new Covid({
          indicativo: ind[9],
          pais: pa[9],
          casos: ca[9],
          mortalidad: mo[9],
          muertes: mu[9],
        });

        data9.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data10 = new Covid({
          indicativo: ind[10],
          pais: pa[10],
          casos: ca[10],
          mortalidad: mo[10],
          muertes: mu[10],
        });

        data10.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data11 = new Covid({
          indicativo: ind[11],
          pais: pa[11],
          casos: ca[11],
          mortalidad: mo[11],
          muertes: mu[11],
        });

        data11.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data12 = new Covid({
          indicativo: ind[12],
          pais: pa[12],
          casos: ca[12],
          mortalidad: mo[12],
          muertes: mu[12],
        });

        data12.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data13 = new Covid({
          indicativo: ind[13],
          pais: pa[13],
          casos: ca[13],
          mortalidad: mo[13],
          muertes: mu[13],
        });

        data13.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data14 = new Covid({
          indicativo: ind[14],
          pais: pa[14],
          casos: ca[14],
          mortalidad: mo[14],
          muertes: mu[14],
        });

        data14.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data15 = new Covid({
          indicativo: ind[15],
          pais: pa[15],
          casos: ca[15],
          mortalidad: mo[15],
          muertes: mu[15],
        });

        data15.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data16 = new Covid({
          indicativo: ind[16],
          pais: pa[16],
          casos: ca[16],
          mortalidad: mo[16],
          muertes: mu[16],
        });

        data16.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data17 = new Covid({
          indicativo: ind[17],
          pais: pa[17],
          casos: ca[17],
          mortalidad: mo[17],
          muertes: mu[17],
        });

        data17.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data18 = new Covid({
          indicativo: ind[18],
          pais: pa[18],
          casos: ca[18],
          mortalidad: mo[18],
          muertes: mu[18],
        });

        data18.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data19 = new Covid({
          indicativo: ind[19],
          pais: pa[19],
          casos: ca[19],
          mortalidad: mo[19],
          muertes: mu[19],
        });

        data19.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data20 = new Covid({
          indicativo: ind[20],
          pais: pa[20],
          casos: ca[20],
          mortalidad: mo[20],
          muertes: mu[20],
        });

        data20.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data21 = new Covid({
          indicativo: ind[21],
          pais: pa[21],
          casos: ca[21],
          mortalidad: mo[21],
          muertes: mu[21],
        });

        data21.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data22 = new Covid({
          indicativo: ind[22],
          pais: pa[22],
          casos: ca[22],
          mortalidad: mo[22],
          muertes: mu[22],
        });

        data22.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data23 = new Covid({
          indicativo: ind[23],
          pais: pa[23],
          casos: ca[23],
          mortalidad: mo[23],
          muertes: mu[23],
        });

        data23.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data24 = new Covid({
          indicativo: ind[24],
          pais: pa[24],
          casos: ca[24],
          mortalidad: mo[24],
          muertes: mu[24],
        });

        data24.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data25 = new Covid({
          indicativo: ind[25],
          pais: pa[25],
          casos: ca[25],
          mortalidad: mo[25],
          muertes: mu[25],
        });

        data25.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data26 = new Covid({
          indicativo: ind[26],
          pais: pa[26],
          casos: ca[26],
          mortalidad: mo[26],
          muertes: mu[26],
        });

        data26.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data27 = new Covid({
          indicativo: ind[27],
          pais: pa[27],
          casos: ca[27],
          mortalidad: mo[27],
          muertes: mu[27],
        });

        data27.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data28 = new Covid({
          indicativo: ind[28],
          pais: pa[28],
          casos: ca[28],
          mortalidad: mo[28],
          muertes: mu[28],
        });

        data28.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data29 = new Covid({
          indicativo: ind[29],
          pais: pa[29],
          casos: ca[29],
          mortalidad: mo[29],
          muertes: mu[29],
        });

        data29.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data30 = new Covid({
          indicativo: ind[30],
          pais: pa[30],
          casos: ca[30],
          mortalidad: mo[30],
          muertes: mu[30],
        });

        data30.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data31 = new Covid({
          indicativo: ind[31],
          pais: pa[31],
          casos: ca[31],
          mortalidad: mo[31],
          muertes: mu[31],
        });

        data31.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data32 = new Covid({
          indicativo: ind[32],
          pais: pa[32],
          casos: ca[32],
          mortalidad: mo[32],
          muertes: mu[32],
        });

        data32.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data33 = new Covid({
          indicativo: ind[33],
          pais: pa[33],
          casos: ca[33],
          mortalidad: mo[33],
          muertes: mu[33],
        });

        data33.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data34 = new Covid({
          indicativo: ind[34],
          pais: pa[34],
          casos: ca[34],
          mortalidad: mo[34],
          muertes: mu[34],
        });

        data34.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data35 = new Covid({
          indicativo: ind[35],
          pais: pa[35],
          casos: ca[35],
          mortalidad: mo[35],
          muertes: mu[35],
        });

        data35.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data36 = new Covid({
          indicativo: ind[36],
          pais: pa[36],
          casos: ca[36],
          mortalidad: mo[36],
          muertes: mu[36],
        });

        data36.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data37 = new Covid({
          indicativo: ind[37],
          pais: pa[37],
          casos: ca[37],
          mortalidad: mo[37],
          muertes: mu[37],
        });

        data37.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data38 = new Covid({
          indicativo: ind[38],
          pais: pa[38],
          casos: ca[38],
          mortalidad: mo[38],
          muertes: mu[38],
        });

        data38.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data39 = new Covid({
          indicativo: ind[39],
          pais: pa[39],
          casos: ca[39],
          mortalidad: mo[39],
          muertes: mu[39],
        });

        data39.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data40 = new Covid({
          indicativo: ind[40],
          pais: pa[40],
          casos: ca[40],
          mortalidad: mo[40],
          muertes: mu[40],
        });

        data40.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data41 = new Covid({
          indicativo: ind[41],
          pais: pa[41],
          casos: ca[41],
          mortalidad: mo[41],
          muertes: mu[41],
        });

        data41.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data42 = new Covid({
          indicativo: ind[42],
          pais: pa[42],
          casos: ca[42],
          mortalidad: mo[42],
          muertes: mu[42],
        });

        data42.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data43 = new Covid({
          indicativo: ind[43],
          pais: pa[43],
          casos: ca[43],
          mortalidad: mo[43],
          muertes: mu[43],
        });

        data43.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data44 = new Covid({
          indicativo: ind[44],
          pais: pa[44],
          casos: ca[44],
          mortalidad: mo[44],
          muertes: mu[44],
        });

        data44.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data45 = new Covid({
          indicativo: ind[45],
          pais: pa[45],
          casos: ca[45],
          mortalidad: mo[45],
          muertes: mu[45],
        });

        data45.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data46 = new Covid({
          indicativo: ind[46],
          pais: pa[46],
          casos: ca[46],
          mortalidad: mo[46],
          muertes: mu[46],
        });

        data46.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data47 = new Covid({
          indicativo: ind[47],
          pais: pa[47],
          casos: ca[47],
          mortalidad: mo[47],
          muertes: mu[47],
        });

        data47.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data48 = new Covid({
          indicativo: ind[48],
          pais: pa[48],
          casos: ca[48],
          mortalidad: mo[48],
          muertes: mu[48],
        });

        data48.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data49 = new Covid({
          indicativo: ind[49],
          pais: pa[49],
          casos: ca[49],
          mortalidad: mo[49],
          muertes: mu[49],
        });

        data49.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data50 = new Covid({
          indicativo: ind[50],
          pais: pa[50],
          casos: ca[50],
          mortalidad: mo[50],
          muertes: mu[50],
        });

        data50.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data51 = new Covid({
          indicativo: ind[51],
          pais: pa[51],
          casos: ca[51],
          mortalidad: mo[51],
          muertes: mu[51],
        });

        data51.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data52 = new Covid({
          indicativo: ind[52],
          pais: pa[52],
          casos: ca[52],
          mortalidad: mo[52],
          muertes: mu[52],
        });

        data52.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data53 = new Covid({
          indicativo: ind[53],
          pais: pa[53],
          casos: ca[53],
          mortalidad: mo[53],
          muertes: mu[53],
        });

        data53.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data54 = new Covid({
          indicativo: ind[54],
          pais: pa[54],
          casos: ca[54],
          mortalidad: mo[54],
          muertes: mu[54],
        });

        data54.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data55 = new Covid({
          indicativo: ind[55],
          pais: pa[55],
          casos: ca[55],
          mortalidad: mo[55],
          muertes: mu[55],
        });

        data55.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data56 = new Covid({
          indicativo: ind[56],
          pais: pa[56],
          casos: ca[56],
          mortalidad: mo[56],
          muertes: mu[56],
        });

        data56.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data57 = new Covid({
          indicativo: ind[57],
          pais: pa[57],
          casos: ca[57],
          mortalidad: mo[57],
          muertes: mu[57],
        });

        data57.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data58 = new Covid({
          indicativo: ind[58],
          pais: pa[58],
          casos: ca[58],
          mortalidad: mo[58],
          muertes: mu[58],
        });

        data58.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data59 = new Covid({
          indicativo: ind[59],
          pais: pa[59],
          casos: ca[59],
          mortalidad: mo[59],
          muertes: mu[59],
        });

        data59.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data60 = new Covid({
          indicativo: ind[60],
          pais: pa[60],
          casos: ca[60],
          mortalidad: mo[60],
          muertes: mu[60],
        });

        data60.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data61 = new Covid({
          indicativo: ind[61],
          pais: pa[61],
          casos: ca[61],
          mortalidad: mo[61],
          muertes: mu[61],
        });

        data61.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data62 = new Covid({
          indicativo: ind[62],
          pais: pa[62],
          casos: ca[62],
          mortalidad: mo[62],
          muertes: mu[62],
        });

        data62.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data63 = new Covid({
          indicativo: ind[63],
          pais: pa[63],
          casos: ca[63],
          mortalidad: mo[63],
          muertes: mu[63],
        });

        data63.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data64 = new Covid({
          indicativo: ind[64],
          pais: pa[64],
          casos: ca[64],
          mortalidad: mo[64],
          muertes: mu[64],
        });

        data64.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data65 = new Covid({
          indicativo: ind[65],
          pais: pa[65],
          casos: ca[65],
          mortalidad: mo[65],
          muertes: mu[65],
        });

        data65.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data66 = new Covid({
          indicativo: ind[66],
          pais: pa[66],
          casos: ca[66],
          mortalidad: mo[66],
          muertes: mu[66],
        });

        data66.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data67 = new Covid({
          indicativo: ind[67],
          pais: pa[67],
          casos: ca[67],
          mortalidad: mo[67],
          muertes: mu[67],
        });

        data67.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data68 = new Covid({
          indicativo: ind[68],
          pais: pa[68],
          casos: ca[68],
          mortalidad: mo[68],
          muertes: mu[68],
        });

        data68.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data69 = new Covid({
          indicativo: ind[69],
          pais: pa[69],
          casos: ca[69],
          mortalidad: mo[69],
          muertes: mu[69],
        });

        data69.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data70 = new Covid({
          indicativo: ind[70],
          pais: pa[70],
          casos: ca[70],
          mortalidad: mo[70],
          muertes: mu[70],
        });

        data70.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data71 = new Covid({
          indicativo: ind[71],
          pais: pa[71],
          casos: ca[71],
          mortalidad: mo[71],
          muertes: mu[71],
        });

        data71.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data72 = new Covid({
          indicativo: ind[72],
          pais: pa[72],
          casos: ca[72],
          mortalidad: mo[72],
          muertes: mu[72],
        });

        data72.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data73 = new Covid({
          indicativo: ind[73],
          pais: pa[73],
          casos: ca[73],
          mortalidad: mo[73],
          muertes: mu[73],
        });

        data73.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data74 = new Covid({
          indicativo: ind[74],
          pais: pa[74],
          casos: ca[74],
          mortalidad: mo[74],
          muertes: mu[74],
        });

        data74.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data75 = new Covid({
          indicativo: ind[75],
          pais: pa[75],
          casos: ca[75],
          mortalidad: mo[75],
          muertes: mu[75],
        });

        data75.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data76 = new Covid({
          indicativo: ind[76],
          pais: pa[76],
          casos: ca[76],
          mortalidad: mo[76],
          muertes: mu[76],
        });

        data76.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data77 = new Covid({
          indicativo: ind[77],
          pais: pa[77],
          casos: ca[77],
          mortalidad: mo[77],
          muertes: mu[77],
        });

        data77.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data78 = new Covid({
          indicativo: ind[78],
          pais: pa[78],
          casos: ca[78],
          mortalidad: mo[78],
          muertes: mu[78],
        });

        data78.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data79 = new Covid({
          indicativo: ind[79],
          pais: pa[79],
          casos: ca[79],
          mortalidad: mo[79],
          muertes: mu[79],
        });

        data79.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data80 = new Covid({
          indicativo: ind[80],
          pais: pa[80],
          casos: ca[80],
          mortalidad: mo[80],
          muertes: mu[80],
        });

        data80.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data81 = new Covid({
          indicativo: ind[81],
          pais: pa[81],
          casos: ca[81],
          mortalidad: mo[81],
          muertes: mu[81],
        });

        data81.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data82 = new Covid({
          indicativo: ind[82],
          pais: pa[82],
          casos: ca[82],
          mortalidad: mo[82],
          muertes: mu[82],
        });

        data82.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data83 = new Covid({
          indicativo: ind[83],
          pais: pa[83],
          casos: ca[83],
          mortalidad: mo[83],
          muertes: mu[83],
        });

        data83.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data84 = new Covid({
          indicativo: ind[84],
          pais: pa[84],
          casos: ca[84],
          mortalidad: mo[84],
          muertes: mu[84],
        });

        data84.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data85 = new Covid({
          indicativo: ind[85],
          pais: pa[85],
          casos: ca[85],
          mortalidad: mo[85],
          muertes: mu[85],
        });

        data85.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data86 = new Covid({
          indicativo: ind[86],
          pais: pa[86],
          casos: ca[86],
          mortalidad: mo[86],
          muertes: mu[86],
        });

        data86.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data87 = new Covid({
          indicativo: ind[87],
          pais: pa[87],
          casos: ca[87],
          mortalidad: mo[87],
          muertes: mu[87],
        });

        data87.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data88 = new Covid({
          indicativo: ind[88],
          pais: pa[88],
          casos: ca[88],
          mortalidad: mo[88],
          muertes: mu[88],
        });

        data88.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data89 = new Covid({
          indicativo: ind[89],
          pais: pa[89],
          casos: ca[89],
          mortalidad: mo[89],
          muertes: mu[89],
        });

        data89.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data90 = new Covid({
          indicativo: ind[90],
          pais: pa[90],
          casos: ca[90],
          mortalidad: mo[90],
          muertes: mu[90],
        });

        data90.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data91 = new Covid({
          indicativo: ind[91],
          pais: pa[91],
          casos: ca[91],
          mortalidad: mo[91],
          muertes: mu[91],
        });

        data91.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data92 = new Covid({
          indicativo: ind[92],
          pais: pa[92],
          casos: ca[92],
          mortalidad: mo[92],
          muertes: mu[92],
        });

        data92.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data93 = new Covid({
          indicativo: ind[93],
          pais: pa[93],
          casos: ca[93],
          mortalidad: mo[93],
          muertes: mu[93],
        });

        data93.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data94 = new Covid({
          indicativo: ind[94],
          pais: pa[94],
          casos: ca[94],
          mortalidad: mo[94],
          muertes: mu[94],
        });

        data94.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data95 = new Covid({
          indicativo: ind[95],
          pais: pa[95],
          casos: ca[95],
          mortalidad: mo[95],
          muertes: mu[95],
        });

        data95.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data96 = new Covid({
          indicativo: ind[96],
          pais: pa[96],
          casos: ca[96],
          mortalidad: mo[96],
          muertes: mu[96],
        });

        data96.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data97 = new Covid({
          indicativo: ind[97],
          pais: pa[97],
          casos: ca[97],
          mortalidad: mo[97],
          muertes: mu[97],
        });

        data97.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data98 = new Covid({
          indicativo: ind[98],
          pais: pa[98],
          casos: ca[98],
          mortalidad: mo[98],
          muertes: mu[98],
        });

        data98.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data99 = new Covid({
          indicativo: ind[99],
          pais: pa[99],
          casos: ca[99],
          mortalidad: mo[99],
          muertes: mu[99],
        });

        data99.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data100 = new Covid({
          indicativo: ind[100],
          pais: pa[100],
          casos: ca[100],
          mortalidad: mo[100],
          muertes: mu[100],
        });

        data100.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });
        const data101 = new Covid({
          indicativo: ind[101],
          pais: pa[101],
          casos: ca[101],
          mortalidad: mo[101],
          muertes: mu[101],
        });

        data101.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data102 = new Covid({
          indicativo: ind[102],
          pais: pa[102],
          casos: ca[102],
          mortalidad: mo[102],
          muertes: mu[102],
        });

        data102.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data103 = new Covid({
          indicativo: ind[103],
          pais: pa[103],
          casos: ca[103],
          mortalidad: mo[103],
          muertes: mu[103],
        });

        data103.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data104 = new Covid({
          indicativo: ind[104],
          pais: pa[104],
          casos: ca[104],
          mortalidad: mo[104],
          muertes: mu[104],
        });

        data104.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data105 = new Covid({
          indicativo: ind[105],
          pais: pa[105],
          casos: ca[105],
          mortalidad: mo[105],
          muertes: mu[105],
        });

        data105.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data106 = new Covid({
          indicativo: ind[106],
          pais: pa[106],
          casos: ca[106],
          mortalidad: mo[106],
          muertes: mu[106],
        });

        data106.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data107 = new Covid({
          indicativo: ind[107],
          pais: pa[107],
          casos: ca[107],
          mortalidad: mo[107],
          muertes: mu[107],
        });

        data107.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data108 = new Covid({
          indicativo: ind[108],
          pais: pa[108],
          casos: ca[108],
          mortalidad: mo[108],
          muertes: mu[108],
        });

        data108.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data109 = new Covid({
          indicativo: ind[109],
          pais: pa[109],
          casos: ca[109],
          mortalidad: mo[109],
          muertes: mu[109],
        });

        data109.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data110 = new Covid({
          indicativo: ind[110],
          pais: pa[110],
          casos: ca[110],
          mortalidad: mo[110],
          muertes: mu[110],
        });

        data110.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data111 = new Covid({
          indicativo: ind[111],
          pais: pa[111],
          casos: ca[111],
          mortalidad: mo[111],
          muertes: mu[111],
        });

        data111.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data112 = new Covid({
          indicativo: ind[112],
          pais: pa[112],
          casos: ca[112],
          mortalidad: mo[112],
          muertes: mu[112],
        });

        data112.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data113 = new Covid({
          indicativo: ind[113],
          pais: pa[113],
          casos: ca[113],
          mortalidad: mo[113],
          muertes: mu[113],
        });

        data113.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data114 = new Covid({
          indicativo: ind[114],
          pais: pa[114],
          casos: ca[114],
          mortalidad: mo[114],
          muertes: mu[114],
        });

        data114.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data115 = new Covid({
          indicativo: ind[115],
          pais: pa[115],
          casos: ca[115],
          mortalidad: mo[115],
          muertes: mu[115],
        });

        data115.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data116 = new Covid({
          indicativo: ind[116],
          pais: pa[116],
          casos: ca[116],
          mortalidad: mo[116],
          muertes: mu[116],
        });

        data116.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data117 = new Covid({
          indicativo: ind[117],
          pais: pa[117],
          casos: ca[117],
          mortalidad: mo[117],
          muertes: mu[117],
        });

        data117.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data118 = new Covid({
          indicativo: ind[118],
          pais: pa[118],
          casos: ca[118],
          mortalidad: mo[118],
          muertes: mu[118],
        });

        data118.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data119 = new Covid({
          indicativo: ind[119],
          pais: pa[119],
          casos: ca[119],
          mortalidad: mo[119],
          muertes: mu[119],
        });

        data119.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data120 = new Covid({
          indicativo: ind[120],
          pais: pa[120],
          casos: ca[120],
          mortalidad: mo[120],
          muertes: mu[120],
        });

        data120.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data121 = new Covid({
          indicativo: ind[121],
          pais: pa[121],
          casos: ca[121],
          mortalidad: mo[121],
          muertes: mu[121],
        });

        data121.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data122 = new Covid({
          indicativo: ind[122],
          pais: pa[122],
          casos: ca[122],
          mortalidad: mo[122],
          muertes: mu[122],
        });

        data122.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data123 = new Covid({
          indicativo: ind[123],
          pais: pa[123],
          casos: ca[123],
          mortalidad: mo[123],
          muertes: mu[123],
        });

        data123.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data124 = new Covid({
          indicativo: ind[124],
          pais: pa[124],
          casos: ca[124],
          mortalidad: mo[124],
          muertes: mu[124],
        });

        data124.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data125 = new Covid({
          indicativo: ind[125],
          pais: pa[125],
          casos: ca[125],
          mortalidad: mo[125],
          muertes: mu[125],
        });

        data125.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data126 = new Covid({
          indicativo: ind[126],
          pais: pa[126],
          casos: ca[126],
          mortalidad: mo[126],
          muertes: mu[126],
        });

        data126.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data127 = new Covid({
          indicativo: ind[127],
          pais: pa[127],
          casos: ca[127],
          mortalidad: mo[127],
          muertes: mu[127],
        });

        data127.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data128 = new Covid({
          indicativo: ind[128],
          pais: pa[128],
          casos: ca[128],
          mortalidad: mo[128],
          muertes: mu[128],
        });

        data128.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data129 = new Covid({
          indicativo: ind[129],
          pais: pa[129],
          casos: ca[129],
          mortalidad: mo[129],
          muertes: mu[129],
        });

        data129.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data130 = new Covid({
          indicativo: ind[130],
          pais: pa[130],
          casos: ca[130],
          mortalidad: mo[130],
          muertes: mu[130],
        });

        data130.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data131 = new Covid({
          indicativo: ind[131],
          pais: pa[131],
          casos: ca[131],
          mortalidad: mo[131],
          muertes: mu[131],
        });

        data131.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data132 = new Covid({
          indicativo: ind[132],
          pais: pa[132],
          casos: ca[132],
          mortalidad: mo[132],
          muertes: mu[132],
        });

        data132.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data133 = new Covid({
          indicativo: ind[133],
          pais: pa[133],
          casos: ca[133],
          mortalidad: mo[133],
          muertes: mu[133],
        });

        data133.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data134 = new Covid({
          indicativo: ind[134],
          pais: pa[134],
          casos: ca[134],
          mortalidad: mo[134],
          muertes: mu[134],
        });

        data134.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data135 = new Covid({
          indicativo: ind[135],
          pais: pa[135],
          casos: ca[135],
          mortalidad: mo[135],
          muertes: mu[135],
        });

        data135.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data136 = new Covid({
          indicativo: ind[136],
          pais: pa[136],
          casos: ca[136],
          mortalidad: mo[136],
          muertes: mu[136],
        });

        data136.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data137 = new Covid({
          indicativo: ind[137],
          pais: pa[137],
          casos: ca[137],
          mortalidad: mo[137],
          muertes: mu[137],
        });

        data137.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data138 = new Covid({
          indicativo: ind[138],
          pais: pa[138],
          casos: ca[138],
          mortalidad: mo[138],
          muertes: mu[138],
        });

        data138.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data139 = new Covid({
          indicativo: ind[139],
          pais: pa[139],
          casos: ca[139],
          mortalidad: mo[139],
          muertes: mu[139],
        });

        data139.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data140 = new Covid({
          indicativo: ind[140],
          pais: pa[140],
          casos: ca[140],
          mortalidad: mo[140],
          muertes: mu[140],
        });

        data140.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data141 = new Covid({
          indicativo: ind[141],
          pais: pa[141],
          casos: ca[141],
          mortalidad: mo[141],
          muertes: mu[141],
        });

        data141.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data142 = new Covid({
          indicativo: ind[142],
          pais: pa[142],
          casos: ca[142],
          mortalidad: mo[142],
          muertes: mu[142],
        });

        data142.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data143 = new Covid({
          indicativo: ind[143],
          pais: pa[143],
          casos: ca[143],
          mortalidad: mo[143],
          muertes: mu[143],
        });

        data143.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data144 = new Covid({
          indicativo: ind[144],
          pais: pa[144],
          casos: ca[144],
          mortalidad: mo[144],
          muertes: mu[144],
        });

        data144.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data145 = new Covid({
          indicativo: ind[145],
          pais: pa[145],
          casos: ca[145],
          mortalidad: mo[145],
          muertes: mu[145],
        });

        data145.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data146 = new Covid({
          indicativo: ind[146],
          pais: pa[146],
          casos: ca[146],
          mortalidad: mo[146],
          muertes: mu[146],
        });

        data146.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data147 = new Covid({
          indicativo: ind[147],
          pais: pa[147],
          casos: ca[147],
          mortalidad: mo[147],
          muertes: mu[147],
        });

        data147.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data148 = new Covid({
          indicativo: ind[148],
          pais: pa[148],
          casos: ca[148],
          mortalidad: mo[148],
          muertes: mu[148],
        });

        data148.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data149 = new Covid({
          indicativo: ind[149],
          pais: pa[149],
          casos: ca[149],
          mortalidad: mo[149],
          muertes: mu[149],
        });

        data149.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data150 = new Covid({
          indicativo: ind[150],
          pais: pa[150],
          casos: ca[150],
          mortalidad: mo[150],
          muertes: mu[150],
        });

        data150.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data151 = new Covid({
          indicativo: ind[151],
          pais: pa[151],
          casos: ca[151],
          mortalidad: mo[151],
          muertes: mu[151],
        });

        data151.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data152 = new Covid({
          indicativo: ind[152],
          pais: pa[152],
          casos: ca[152],
          mortalidad: mo[152],
          muertes: mu[152],
        });

        data152.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data153 = new Covid({
          indicativo: ind[153],
          pais: pa[153],
          casos: ca[153],
          mortalidad: mo[153],
          muertes: mu[153],
        });

        data153.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data154 = new Covid({
          indicativo: ind[154],
          pais: pa[154],
          casos: ca[154],
          mortalidad: mo[154],
          muertes: mu[154],
        });

        data154.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data155 = new Covid({
          indicativo: ind[155],
          pais: pa[155],
          casos: ca[155],
          mortalidad: mo[155],
          muertes: mu[155],
        });

        data155.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data156 = new Covid({
          indicativo: ind[156],
          pais: pa[156],
          casos: ca[156],
          mortalidad: mo[156],
          muertes: mu[156],
        });

        data156.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data157 = new Covid({
          indicativo: ind[157],
          pais: pa[157],
          casos: ca[157],
          mortalidad: mo[157],
          muertes: mu[157],
        });

        data157.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data158 = new Covid({
          indicativo: ind[158],
          pais: pa[158],
          casos: ca[158],
          mortalidad: mo[158],
          muertes: mu[158],
        });

        data158.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data159 = new Covid({
          indicativo: ind[159],
          pais: pa[159],
          casos: ca[159],
          mortalidad: mo[159],
          muertes: mu[159],
        });

        data159.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data160 = new Covid({
          indicativo: ind[160],
          pais: pa[160],
          casos: ca[160],
          mortalidad: mo[160],
          muertes: mu[160],
        });

        data160.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data161 = new Covid({
          indicativo: ind[161],
          pais: pa[161],
          casos: ca[161],
          mortalidad: mo[161],
          muertes: mu[161],
        });

        data161.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data162 = new Covid({
          indicativo: ind[162],
          pais: pa[162],
          casos: ca[162],
          mortalidad: mo[162],
          muertes: mu[162],
        });

        data162.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data163 = new Covid({
          indicativo: ind[163],
          pais: pa[163],
          casos: ca[163],
          mortalidad: mo[163],
          muertes: mu[163],
        });

        data163.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data164 = new Covid({
          indicativo: ind[164],
          pais: pa[164],
          casos: ca[164],
          mortalidad: mo[164],
          muertes: mu[164],
        });

        data164.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data165 = new Covid({
          indicativo: ind[165],
          pais: pa[165],
          casos: ca[165],
          mortalidad: mo[165],
          muertes: mu[165],
        });

        data165.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data166 = new Covid({
          indicativo: ind[166],
          pais: pa[166],
          casos: ca[166],
          mortalidad: mo[166],
          muertes: mu[166],
        });

        data166.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data167 = new Covid({
          indicativo: ind[167],
          pais: pa[167],
          casos: ca[167],
          mortalidad: mo[167],
          muertes: mu[167],
        });

        data167.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data168 = new Covid({
          indicativo: ind[168],
          pais: pa[168],
          casos: ca[168],
          mortalidad: mo[168],
          muertes: mu[168],
        });

        data168.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data169 = new Covid({
          indicativo: ind[169],
          pais: pa[169],
          casos: ca[169],
          mortalidad: mo[169],
          muertes: mu[169],
        });

        data169.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data170 = new Covid({
          indicativo: ind[170],
          pais: pa[170],
          casos: ca[170],
          mortalidad: mo[170],
          muertes: mu[170],
        });

        data170.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data171 = new Covid({
          indicativo: ind[171],
          pais: pa[171],
          casos: ca[171],
          mortalidad: mo[171],
          muertes: mu[171],
        });

        data171.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data172 = new Covid({
          indicativo: ind[172],
          pais: pa[172],
          casos: ca[172],
          mortalidad: mo[172],
          muertes: mu[172],
        });

        data172.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data173 = new Covid({
          indicativo: ind[173],
          pais: pa[173],
          casos: ca[173],
          mortalidad: mo[173],
          muertes: mu[173],
        });

        data173.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data174 = new Covid({
          indicativo: ind[174],
          pais: pa[174],
          casos: ca[174],
          mortalidad: mo[174],
          muertes: mu[174],
        });

        data174.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data175 = new Covid({
          indicativo: ind[175],
          pais: pa[175],
          casos: ca[175],
          mortalidad: mo[175],
          muertes: mu[175],
        });

        data175.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data176 = new Covid({
          indicativo: ind[176],
          pais: pa[176],
          casos: ca[176],
          mortalidad: mo[176],
          muertes: mu[176],
        });

        data176.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data177 = new Covid({
          indicativo: ind[177],
          pais: pa[177],
          casos: ca[177],
          mortalidad: mo[177],
          muertes: mu[177],
        });

        data177.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data178 = new Covid({
          indicativo: ind[178],
          pais: pa[178],
          casos: ca[178],
          mortalidad: mo[178],
          muertes: mu[178],
        });

        data178.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data179 = new Covid({
          indicativo: ind[179],
          pais: pa[179],
          casos: ca[179],
          mortalidad: mo[179],
          muertes: mu[179],
        });

        data179.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data180 = new Covid({
          indicativo: ind[180],
          pais: pa[180],
          casos: ca[180],
          mortalidad: mo[180],
          muertes: mu[180],
        });

        data180.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data181 = new Covid({
          indicativo: ind[181],
          pais: pa[181],
          casos: ca[181],
          mortalidad: mo[181],
          muertes: mu[181],
        });

        data181.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data182 = new Covid({
          indicativo: ind[182],
          pais: pa[182],
          casos: ca[182],
          mortalidad: mo[182],
          muertes: mu[182],
        });

        data182.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data183 = new Covid({
          indicativo: ind[183],
          pais: pa[183],
          casos: ca[183],
          mortalidad: mo[183],
          muertes: mu[183],
        });

        data183.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data184 = new Covid({
          indicativo: ind[184],
          pais: pa[184],
          casos: ca[184],
          mortalidad: mo[184],
          muertes: mu[184],
        });

        data184.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data185 = new Covid({
          indicativo: ind[185],
          pais: pa[185],
          casos: ca[185],
          mortalidad: mo[185],
          muertes: mu[185],
        });

        data185.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data186 = new Covid({
          indicativo: ind[186],
          pais: pa[186],
          casos: ca[186],
          mortalidad: mo[186],
          muertes: mu[186],
        });

        data186.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data187 = new Covid({
          indicativo: ind[187],
          pais: pa[187],
          casos: ca[187],
          mortalidad: mo[187],
          muertes: mu[187],
        });

        data187.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data188 = new Covid({
          indicativo: ind[188],
          pais: pa[188],
          casos: ca[188],
          mortalidad: mo[188],
          muertes: mu[188],
        });

        data188.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data189 = new Covid({
          indicativo: ind[189],
          pais: pa[189],
          casos: ca[189],
          mortalidad: mo[189],
          muertes: mu[189],
        });

        data189.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data190 = new Covid({
          indicativo: ind[190],
          pais: pa[190],
          casos: ca[190],
          mortalidad: mo[190],
          muertes: mu[190],
        });

        data190.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data191 = new Covid({
          indicativo: ind[191],
          pais: pa[191],
          casos: ca[191],
          mortalidad: mo[191],
          muertes: mu[191],
        });

        data191.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data192 = new Covid({
          indicativo: ind[192],
          pais: pa[192],
          casos: ca[192],
          mortalidad: mo[192],
          muertes: mu[192],
        });

        data192.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data193 = new Covid({
          indicativo: ind[193],
          pais: pa[193],
          casos: ca[193],
          mortalidad: mo[193],
          muertes: mu[193],
        });

        data193.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data194 = new Covid({
          indicativo: ind[194],
          pais: pa[194],
          casos: ca[194],
          mortalidad: mo[194],
          muertes: mu[194],
        });

        data194.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data195 = new Covid({
          indicativo: ind[195],
          pais: pa[195],
          casos: ca[195],
          mortalidad: mo[195],
          muertes: mu[195],
        });

        data195.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data196 = new Covid({
          indicativo: ind[196],
          pais: pa[196],
          casos: ca[196],
          mortalidad: mo[196],
          muertes: mu[196],
        });

        data196.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data197 = new Covid({
          indicativo: ind[197],
          pais: pa[197],
          casos: ca[197],
          mortalidad: mo[197],
          muertes: mu[197],
        });

        data197.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data198 = new Covid({
          indicativo: ind[198],
          pais: pa[198],
          casos: ca[198],
          mortalidad: mo[198],
          muertes: mu[198],
        });

        data198.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data199 = new Covid({
          indicativo: ind[199],
          pais: pa[199],
          casos: ca[199],
          mortalidad: mo[199],
          muertes: mu[199],
        });

        data199.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data200 = new Covid({
          indicativo: ind[200],
          pais: pa[200],
          casos: ca[200],
          mortalidad: mo[200],
          muertes: mu[200],
        });

        data200.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data201 = new Covid({
          indicativo: ind[201],
          pais: pa[201],
          casos: ca[201],
          mortalidad: mo[201],
          muertes: mu[201],
        });

        data201.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data202 = new Covid({
          indicativo: ind[202],
          pais: pa[202],
          casos: ca[202],
          mortalidad: mo[202],
          muertes: mu[202],
        });

        data202.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data203 = new Covid({
          indicativo: ind[203],
          pais: pa[203],
          casos: ca[203],
          mortalidad: mo[203],
          muertes: mu[203],
        });

        data203.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data204 = new Covid({
          indicativo: ind[204],
          pais: pa[204],
          casos: ca[204],
          mortalidad: mo[204],
          muertes: mu[204],
        });

        data204.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data205 = new Covid({
          indicativo: ind[205],
          pais: pa[205],
          casos: ca[205],
          mortalidad: mo[205],
          muertes: mu[205],
        });

        data205.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data206 = new Covid({
          indicativo: ind[206],
          pais: pa[206],
          casos: ca[206],
          mortalidad: mo[206],
          muertes: mu[206],
        });

        data206.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data207 = new Covid({
          indicativo: ind[207],
          pais: pa[207],
          casos: ca[207],
          mortalidad: mo[207],
          muertes: mu[207],
        });

        data207.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data208 = new Covid({
          indicativo: ind[208],
          pais: pa[208],
          casos: ca[208],
          mortalidad: mo[208],
          muertes: mu[208],
        });

        data208.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data209 = new Covid({
          indicativo: ind[209],
          pais: pa[209],
          casos: ca[209],
          mortalidad: mo[209],
          muertes: mu[209],
        });

        data209.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

        const data210 = new Covid({
          indicativo: ind[210],
          pais: pa[210],
          casos: ca[210],
          mortalidad: mo[210],
          muertes: mu[210],
        });

        data210.save((err, newData) => {
          if (err) {
            console.log("Error en el servidor");
          } else {
            if (!newData) {
              console.log("No fue posible realizar el registro");
            } else {
              console.log("Registro");
            }
          }
        });

       

        res.status(200).send({
          status: "Datos encotrados",
          datos: dataEncontrada,
          statusCode: 200,
          respuesta: {
            respuesta,
          },
          data: datos,
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
