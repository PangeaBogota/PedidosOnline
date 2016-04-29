var app_angular= angular.module('PedidosOnline');

app_angular.controller("MainController_erp_items",['Metodos_Items','$scope',function (Metodos_Items,$scope) {
	// body...
	$scope.items = [];
    Item.selectAll(function(elem) {$scope.items.push(elem)});
    
}]);

app_angular.controller("NewController_erp_items",['Metodos_Items','$scope','$location',function (Metodos_Items,$scope,$location) {
	$scope.title="Crear erp_items";
	$scope.items=[];
	$scope.Add=function(){
		Item.insert($scope.items)
		$location.path("/");
	}
}]);

app_angular.controller("EditController_erp_items",['Metodos_Items','$scope','$routeParams','$location',function (Metodos_Items,$scope,$routeParams,$location) {
	$scope.items=[];
	$scope.title="Modificar erp_items";
	Item.selectID($routeParams.id,function(elem) {$scope.items.push(elem)})
	$scope.Actualizar=function(){
		Item.Update($scope.items[0],{rowid:$routeParams.id})
		$location.path("/");
	}
	$scope.Eliminar=function(){
		Item.Delete($routeParams.id);
		$location.path('/');
	}
}]);