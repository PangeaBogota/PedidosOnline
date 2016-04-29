var app_angular= angular.module('PedidosOnline');

app_angular.controller("MainController_erp_items_precios",['Metodos_Items_precios','$scope',function (Metodos_Items_precios,$scope) {
	// body...
	$scope.items = [];
    Item.selectAll(function(elem) {$scope.items.push(elem)});
    
}]);

app_angular.controller("NewController_erp_items_precios",['Metodos_Items_precios','$scope','$location',function (Metodos_Items_precios,$scope,$location) {
	$scope.items=[];
	$scope.Add=function(){
		Item.insert($scope.items)
		$location.path("/");
	}
}]);

app_angular.controller("EditController_erp_items_precios",['Metodos_Items_precios','$scope','$routeParams','$location',function (Metodos_Items_precios,$scope,$routeParams,$location) {
	$scope.items=[];
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