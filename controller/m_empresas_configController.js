var app_angular= angular.module('PedidosOnline');

app_angular.controller("MainController_m_empresas_config",['Metodos_m_empresas_config','$scope',function (Metodos_m_empresas_config,$scope) {
	// body...
	$scope.empresas = [];
    Empresa.selectAll(function(elem) {$scope.empresas.push(elem)});
    
}]);

app_angular.controller("NewController_m_empresas_config",['Metodos_m_empresas_config','$scope','$location',function (Metodos_m_empresas_config,$scope,$location) {
	$scope.empresas=[];
	$scope.Add=function(){
		Empresa.insert($scope.empresas)
		$location.path("/");
	}
}]);

app_angular.controller("EditController_m_empresas_config",['Metodos_m_empresas_config','$scope','$routeParams','$location',function (Metodos_m_empresas_config,$scope,$routeParams,$location) {
	$scope.empresas=[];
	Empresa.selectID($routeParams.id,function(elem) {$scope.empresas.push(elem)})
	$scope.Actualizar=function(){
		Empresa.Update($scope.empresas[0],{rowid:$routeParams.id})
		$location.path("/");
	}
	$scope.Eliminar=function(){
		Empresa.Delete($routeParams.id);
		$location.path('/');
	}
}]);