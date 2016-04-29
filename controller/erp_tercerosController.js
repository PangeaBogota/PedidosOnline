var app_angular= angular.module('PedidosOnline');

app_angular.controller("TercerosController",['Metodos_erp_terceros','$scope',function (Metodos_erp_terceros,$scope) {
	// body...
	$scope.terceros = [];
    Terceros.selectAll(function(elem) {$scope.terceros.push(elem)});
    
}]);

app_angular.controller("NewController_erp_terceros",['Metodos_erp_terceros','$scope','$location',function (Metodos_erp_terceros,$scope,$location) {
	$scope.title="Crear erp_terceros";
	$scope.terceros=[];
	$scope.Add=function(){
		Terceros.insert($scope.terceros)
		$location.path("/");
	}
}]);

app_angular.controller("EditController_erp_terceros",['Metodos_erp_terceros','$scope','$routeParams','$location',function (Metodos_erp_terceros,$scope,$routeParams,$location) {
	$scope.terceros=[];
	$scope.title="Modificar erp_terceros";
	Terceros.selectID($routeParams.id,function(elem) {$scope.terceros.push(elem)})
	$scope.Actualizar=function(){
		Terceros.Update($scope.terceros[0],{rowid:$routeParams.id})
		$location.path("/");
	}
	$scope.Eliminar=function(){
		Terceros.Delete($routeParams.id);
		$location.path('/');
	}
}]);