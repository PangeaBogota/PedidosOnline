var app_angular= angular.module('PedidosOnline');

app_angular.controller("MainController_l_log_eventos",['Metodos_l_log_eventos','$scope',function (Metodos_l_log_eventos,$scope) {
	// body...
	$scope.eventos = [];
    Eventos.selectAll(function(elem) {$scope.eventos.push(elem)});
    
}]);

app_angular.controller("NewController_l_log_eventos",['Metodos_l_log_eventos','$scope','$location',function (Metodos_l_log_eventos,$scope,$location) {
	$scope.eventos=[];
	$scope.Add=function(){
		Eventos.insert($scope.eventos)
		$location.path("/");
	}
}]);

app_angular.controller("EditController_l_log_eventos",['Metodos_l_log_eventos','$scope','$routeParams','$location',function (Metodos_l_log_eventos,$scope,$routeParams,$location) {
	$scope.eventos=[];
	Eventos.selectID($routeParams.id,function(elem) {$scope.eventos.push(elem)})
	$scope.Actualizar=function(){
		Eventos.Update($scope.eventos[0],{rowid:$routeParams.id})
		$location.path("/");
	}
	$scope.Eliminar=function(){
		Eventos.Delete($routeParams.id);
		$location.path('/');
	}
}]);