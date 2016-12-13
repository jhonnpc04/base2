module.exports = function(sequelize, DataTypes){
                        return sequelize.define('reclamo',{tiporeclamo: DataTypes.string,
                                                           observacion: DataTypes.strings,
                                                           fechareclamo: DataTypes.strings,
                                                         });
                                              }
