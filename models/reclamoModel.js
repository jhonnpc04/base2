module.exports= function(sequelize, DataTypes){
	 return sequelize.define('Reclamos', {tiporeclamo: DataTypes.STRING,
		 observacion: DataTypes.STRING,
		 fecha: DataTypes.STRING									                                       	              }
                             );
}
