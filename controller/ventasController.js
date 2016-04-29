/**
 * Created by dev10 on 1/7/2016.
 */
var app_angular = angular.module('PedidosOnline');


//CONTROLADOR DEL MOULO DE VENTAS
app_angular.controller("pedidoController",['Conexion','$scope','$location','$http',function (Conexion,$scope,$location,$http) {
	$scope.item;
	$scope.date;
	$scope.precioItem;
	$scope.itemPrecio;
	$scope.itemsAgregadosPedido=[];
	$scope.terceroSelected=[];
    $scope.Search;
	$scope.sucursal=[];
	$scope.pedidos=[];
    $scope.list_tercero = [];
	$scope.list_Sucursales=[];
	$scope.list_precios=[];
	$scope.listprecios=[];
	$scope.list_puntoEnvio=[];
	$scope.list_items=[];
	$scope.SearchItem;
	$scope.ultimoRegistroseleccionado=[];
	$scope.ultimoRegistro=[];
	$scope.pedido_detalle=[];
	$scope.list_pedidos_detalles=[];
	CRUD.select('select item.rowid as rowid_item,item.item_descripcion as descripcion,precios.rowid as rowid_listaprecios,precios.precio_lista as precio from erp_items item inner join erp_items_precios precios on  item.rowid=precios.rowid_item',function(elem){$scope.list_items.push(elem);});
    
	CRUD.selectAll('erp_terceros',function(elem){$scope.list_tercero.push(elem);});
	
    //$scope.AutoCompletar=function(){
//        $("#tercerosBusqueda").autocomplete({
//            source: $scope.list_tercero
//        })
//    }
	$scope.fechasolicitud=function(){
		$scope.datenow=new Date();
		$scope.pedidos.fecha_solicitud=$scope.datenow.getDate() + "/" +$scope.datenow.getDay()+"/"+$scope.datenow.getFullYear();
		$scope.pedidos.fechacreacion=$scope.datenow.getDate() + "/" +$scope.datenow.getDay()+"/"+$scope.datenow.getFullYear();
		
	}
	
	$scope.onChangeTercero=function(){
		$scope.list_Sucursales=[];
		$scope.list_puntoEnvio=[];
		CRUD.selectParametro('erp_terceros_sucursales','rowid_tercero',$scope.terceroSelected.rowid,function(elem){$scope.list_Sucursales.push(elem)});
		CRUD.selectParametro('erp_terceros_punto_envio','rowid_tercero',$scope.terceroSelected.rowid,function(elem){$scope.list_puntoEnvio.push(elem)});
		
		
	}
	
	$scope.onChangeSucursal=function(){
		$scope.list_precios=[];
		CRUD.selectParametro('erp_entidades_master','erp_id_maestro',$scope.sucursal.id_lista_precios,function(elem){$scope.list_precios.push(elem)});
		$scope.pedidos.rowid_cliente_facturacion=$scope.sucursal.rowid;
	}
	
	$scope.adicionaritem=function(){
		if ($scope.itemsAgregadosPedido.indexOf($scope.item) == -1) {
			$scope.item.rowid_pedido=$scope.pedidos.rowid;
			$scope.item.cantidad=1;
			$scope.itemsAgregadosPedido.push($scope.item);
			Mensajes('Item Agregado','success','');
		}
		else
		{
			Mensajes('El Item ya existe en la lista','error','');
		}
		
	}
	$scope.delete = function (item) {
		$scope.items.splice($scope.itemsAgregadosPedido.indexOf(item), 1);
	}
	$scope.guardarCabezera=function(){
		
		CRUD.select('select max(rowid) as rowid from t_pedidos',function(elem){$scope.ultimoRegistro.push(elem);
			$scope.ultimoRegistroseleccionado=$scope.ultimoRegistro[0];
			$scope.pedidos.rowid=$scope.ultimoRegistroseleccionado.rowid+1;
			$scope.pedidos_detalle.rowid_pedido=$scope.pedidos.rowid;
			CRUD.insert('t_pedidos',$scope.pedidos)
			Mensajes('Registrado Correctamente','success','');
			$scope.CambiarTab('3','atras')
		})
		
		
		
		
	}
	
	$scope.modulo=MODULO_PEDIDO_NUEVO;
	
    angular.element('ul.tabs li').click(function () {

        var tab_id = angular.element(this).find('a').data('tab');
        angular.element('ul.tabs li').removeClass('active');
        angular.element('.tab-pane').removeClass('active');
        angular.element(this).toggleClass('active');
        angular.element("#" + tab_id).toggleClass('active');
    });
	
    $scope.CambiarTab = function (tab_actual, accion) {
        $scope.tab_id = null;

        if (tab_actual == '2' && accion == 'atras')
            $scope.tab_id = 'tab_1';
        else if (tab_actual == '2' && accion == 'siguiente')
            $scope.tab_id = 'tab_3';
        else if (tab_actual == '3' && accion == 'atras')
            $scope.tab_id = 'tab_2';

        angular.element('ul.tabs li').removeClass('active');
        angular.element('.tab-pane').removeClass('active');

        angular.element("ul.tabs").find("[data-tab='" + $scope.tab_id + "']").toggleClass('active');
        angular.element("#" + $scope.tab_id).toggleClass('active');
    };
	
    angular.element('#ui-id-1').mouseover(function (){
        angular.element('#ui-id-1').show();
    });
	

}]);