var models = require('../models/models.js');


exports.pricipal = function(req, res, next) {
                    models.reclamo.findAll().then(function(reclamos){
                      res.render('index', { title: 'Proyecto final',
                                            subtitle:'avances en computacion',
                                            reclamos:reclamos
                                          });
                                    }
                            );
                    }

exports.registro = function(req, res) {
  var reclamo = {tiporeclamo:'odeco',
                 observacion:'malservicio',
                 fecha:'29/11/2016'}
                      res.render('registro', {reclamo: reclamo });
                                        }
exports.guardarReclamo = function(req, res){
  console.log("ingresa a guardar");
  reclamo = models.reclamo.build(req.body.reclamo);
  //a continuacion guardamos los campos que recibimos del formulario
  reclamo.save ({fields: ["tiporeclamo",
                          "observacion",
                          "fecha"
                        ]
                }).then(function(){
                  console.log("ingresa a redirect");
                  res.render('respuestaReclamo', {mensaje:'reclamo guardado'});
                });
console.log(reclamo);
    }
