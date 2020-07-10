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
  //hbs();

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
