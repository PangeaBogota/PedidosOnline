var app_angular= angular.module('PedidosOnline');

app_angular.controller("MainController_erp_entidades_master",['Metodos_erp_entidades_master','$scope',function (Metodos_erp_entidades_master,$scope) {
	// body...
	$scope.entidades = [];
    Entidad.selectAll(function(elem) {$scope.entidades.push(elem)});
    
}]);

app_angular.controller("NewController_erp_entidades_master",['Metodos_erp_entidades_master','$scope','$location',function (Metodos_erp_entidades_master,$scope,$location) {
	$scope.entidades=[];
	$scope.Add=function(){
		Entidad.insert($scope.entidades)
		$location.path("/");
	}
}]);

app_angular.controller("EditController_erp_entidades_master",['Metodos_erp_entidades_master','$scope','$routeParams','$location',function (Metodos_erp_entidades_master,$scope,$routeParams,$location) {
	$scope.entidades=[];
	Entidad.selectID($routeParams.id,function(elem) {$scope.entidades.push(elem)})
	$scope.Actualizar=function(){
		Entidad.Update($scope.entidades[0],{rowid:$routeParams.id})
		$location.path("/");
	}
	$scope.Eliminar=function(){
		Entidad.Delete($routeParams.id);
		$location.path('/');
	}
}]);