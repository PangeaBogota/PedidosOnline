var app_angular= angular.module('PedidosOnline');

app_angular.service('Conexion', ['Factory',function (Factory) {
 	CRUD= {};
	//Insercion
    CRUD.insert = function(tabla,elem, callback) {
        db.insert(tabla, elem, callback);
		debugger
    }
	//Busqueda de tabla completa
  	CRUD.selectAll = function(tabla,handler,callback){
    	db.selectAll(tabla).then(function(results) {
            for(var i=0; i < results.rows.length; i++) {
             	handler(results.rows.item(i));
            }
        });
    }
	//Busqueda de tabla por parametro
    CRUD.selectParametro = function(tabla,columna,valor,handler,callback){
		var query='select * from  '+tabla+'  where  '+columna+' = '+valor+'';
        db.select(query).then(function(results) {
            for(var i=0; i < results.rows.length; i++){
                handler(results.rows.item(i));
            }
        })
    }
	CRUD.select = function(query,handler,callback){
		debugger
        db.selectINNERJOIN(query).then(function(results) {
            for(var i=0; i < results.rows.length; i++){
                handler(results.rows.item(i));
            }
        })
		debugger
    }
	//Eliminar Registro
    CRUD.Delete = function(tabla,valor,callback){
        db.del(tabla,{'rowid':valor});
    } 
	//Actualizar Registro
    CRUD.Update = function(tabla,elem, callback) {
        db.update(tabla, elem, callback);
    }

    return CRUD;
}]);