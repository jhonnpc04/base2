var models = require('../models/models.js');

var reclamo = {tiporeclamo:'odeco',
               observacion:'malservicio',
               fechareclamo:'29/11/2016'}
exports.pricipal = function(req, res, next) {
                    models.reclamo.findAll().then(function(reclamo){
                      res.render('index', { title: 'Proyecto final',
                                            subtitle:'avances en computacion',
                                            reclamo:reclamo
                                          });
                                    }
                            )
                    }


exports.registro = function(req, res) {
                      res.render('registro', {reclamo: reclamo });
                                        }
exports.guardarReclamo = function(req, res){
  console.log("ingresa a guardar");
  reclamo = models.reclamo.build(req.body.reclamo);
  //a continuacion guardamos los campos que recibimos del formulario
  reclamo.save ({fields: ["tiporeclamo",
                          "observacion",
                          "fechareclamo"
                        ]
                }).then(function(){
                  console.log("ingresa a redirect");
                  res.render('respuestaReclamo', {mensaje:'reclamo guardado'});
                });
    }
