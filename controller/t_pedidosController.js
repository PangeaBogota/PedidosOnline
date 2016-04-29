var app_angular= angular.module('PedidosOnline');

app_angular.controller("PedidosIngresadosController",['Conexion','$scope',function (Conexion,$scope) {
	// body...
	$scope.pedidos = [];
    CRUD.selectAll(function(elem) {$scope.pedidos.push(elem)});
}]);

app_angular.controller("NewController_t_pedidos",['Conexion','$scope','$location',function (Conexion,$scope,$location) {
	//$scope.title="Crear t_pedidos";
	$scope.pedidos=[];
	$scope.GuardarPedido=function(){
		CRUD.insert($scope.pedidos)
		//$location.path("/");
	}
}]);

app_angular.controller("EditController_t_pedidos",['Conexion','$scope','$routeParams','$location',function (Conexion,$scope,$routeParams,$location) {
	$scope.pedidos=[];
	$scope.title="Modificar t_pedidos";
	CRUD.selectID($routeParams.id,function(elem) {$scope.pedidos.push(elem)})
	$scope.Actualizar=function(){
		CRUD.Update($scope.pedidos[0],{rowid:$routeParams.id})
		$location.path("/");
	}
	$scope.Eliminar=function(){
		CRUD.Delete($routeParams.id);
		$location.path('/');
	}
}]);