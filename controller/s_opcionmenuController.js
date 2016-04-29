var app_angular= angular.module('PedidosOnline');

app_angular.controller("MainController_s_opcionmenu",['Metodos_s_opcionmenu','$scope',function (Metodos_s_opcionmenu,$scope) {
	// body...
	$scope.menu = [];
    Menu.selectAll(function(elem) {$scope.menu.push(elem)});
    
}]);

app_angular.controller("NewController_s_opcionmenu",['Metodos_s_opcionmenu','$scope','$location',function (Metodos_s_opcionmenu,$scope,$location) {
	$scope.menu=[];
	$scope.Add=function(){
		Menu.insert($scope.menu)
		$location.path("/");
	}
}]);

app_angular.controller("EditController_s_opcionmenu",['Metodos_s_opcionmenu','$scope','$routeParams','$location',function (Metodos_s_opcionmenu,$scope,$routeParams,$location) {
	$scope.menu=[];
	Menu.selectID($routeParams.id,function(elem) {$scope.menu.push(elem)})
	$scope.Actualizar=function(){
		Menu.Update($scope.menu[0],{rowid:$routeParams.id})
		$location.path("/");
	}
	$scope.Eliminar=function(){
		Menu.Delete($routeParams.id);
		$location.path('/');
	}
}]);