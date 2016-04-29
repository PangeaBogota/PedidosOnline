var app_angular= angular.module('PedidosOnline');

app_angular.controller("MainController_t_pedidos_detalle",['Metodos_t_pedidos_detalle','$scope',function (Metodos_t_pedidos_detalle,$scope) {
	// body...
	$scope.pedidos = [];
    Pedido_Detalle.selectAll(function(elem) {$scope.pedidos.push(elem)});
    
}]);

app_angular.controller("NewController_t_pedidos_detalle",['Metodos_t_pedidos_detalle','$scope','$location',function (Metodos_t_pedidos_detalle,$scope,$location) {
	$scope.title="Crear t_pedidos_detalle";
	$scope.pedidos=[];
	$scope.Add=function(){
		Pedido_Detalle.insert($scope.pedidos)
		$location.path("/");
	}
}]);

app_angular.controller("EditController_t_pedidos_detalle",['Metodos_t_pedidos_detalle','$scope','$routeParams','$location',function (Metodos_t_pedidos_detalle,$scope,$routeParams,$location) {
	$scope.pedidos=[];
	$scope.title="Modificar t_pedidos_detalle";
	Pedido_Detalle.selectID($routeParams.id,function(elem) {$scope.pedidos.push(elem)})
	$scope.Actualizar=function(){
		Pedido_Detalle.Update($scope.pedidos[0],{rowid:$routeParams.id})
		$location.path("/");
	}
	$scope.Eliminar=function(){
		Pedido_Detalle.Delete($routeParams.id);
		$location.path('/');
	}
}]);