/**
 * Created by dev10 on 12/23/2015.
 */
var app_angular = angular.module('PedidosOnline', ['angular-websql', 'ngResource', 'ngRoute']);

app_angular.config(['$routeProvider',//'$locationProvider',
    function ($routeProvider) {
        //, $locationProvider) {
        $routeProvider
            .when("/", {
                controller: 'appController',
                templateUrl: "view/home/home.html"
            })
            .when('/:modulo/:url', {
                template: '<div ng-include="templateUrl">Loading...</div>',
                controller: 'appController'
            })

            /*.when("/:modulo/:url",{
             controller:'appController',
             templateUrl: function(urlattr){
             if(urlattr.modulo=='pagina_Actual')
             return '#'+ urlattr.url;
             if(urlattr.modulo=='' || urlattr.url=='') {
             urlattr.modulo = 'home';
             urlattr.urlurl = 'home';
             }
             //angular.element('#titulo').html( urlattr.urlurl);
             return 'view/'+ urlattr.modulo+'/' + urlattr.url + '.html';
             }
             })*/
            .otherwise("/");
        // use the HTML5 History API
        //$locationProvider.html5Mode(true);
    }
]);

//CONTROLADOR DE GENERAL
app_angular.controller('sessionController',['$scope',function($scope){
	$scope.sessiondate=JSON.parse(window.localStorage.getItem("CUR_USER"));
	$scope.sincronizar=function(){
		for(var i=0; i < STEP_SINCRONIZACION.length; i++)
		{
			DATOS_ENTIDADES_SINCRONIZACION[i]=localStorage.getItem(STEP_SINCRONIZACION[i].toString());
			DATOS_ENTIDADES_SINCRONIZACION[i] = JSON.parse(DATOS_ENTIDADES_SINCRONIZACION[i]);
	
			for(var j=0; j < DATOS_ENTIDADES_SINCRONIZACION[i].length; j++) {
				
				
				if (STEP_SINCRONIZACION[i] == ENTIDAD_PEDIDOS) {
					
					CRUD.insert('t_pedidos',DATOS_ENTIDADES_SINCRONIZACION[i][j]);
					
				}
				else if (STEP_SINCRONIZACION[i] == ENTIDAD_PEDIDOS_DETALLE) {
					
					CRUD.insert('t_pedidos_detalle',DATOS_ENTIDADES_SINCRONIZACION[i][j]);
				}
				else if (STEP_SINCRONIZACION[i] == ENTIDAD_TERCEROS) {
					CRUD.insert('erp_terceros',DATOS_ENTIDADES_SINCRONIZACION[i][j]);
				}
				else if (STEP_SINCRONIZACION[i] == ENTIDAD_SUCURSALES) {
					CRUD.insert('erp_terceros_sucursales',DATOS_ENTIDADES_SINCRONIZACION[i][j]);
				}
				else if (STEP_SINCRONIZACION[i] == ENTIDAD_MAESTROS) {
					CRUD.insert('erp_entidades_master',DATOS_ENTIDADES_SINCRONIZACION[i][j]);
				}
				else if (STEP_SINCRONIZACION[i] == ENTIDAD_PUNTOS_ENVIO) {
					CRUD.insert('erp_terceros_punto_envio',DATOS_ENTIDADES_SINCRONIZACION[i][j]);
				}
				else if (STEP_SINCRONIZACION[i] == ENTIDAD_ITEMS) {
					CRUD.insert('erp_items',DATOS_ENTIDADES_SINCRONIZACION[i][j]);
				}
				else if (STEP_SINCRONIZACION[i] == ENTIDAD_ITEMS_PRECIOS) {
					CRUD.insert('erp_items_precios',DATOS_ENTIDADES_SINCRONIZACION[i][j]);
				}
				
			}
		}
	}
	
	}])
app_angular.controller('appController',['Conexion','$scope','$location','$http', '$routeParams', 'Factory' ,function (Conexion, $scope, $location, $http, $routeParams, Factory) {
	
	
    if (window.localStorage.getItem("CUR_USER") == null || window.localStorage.getItem("CUR_USER")==undefined) {
        location.href='login.html';
        return;
    }

    if ($routeParams.url == undefined) {
        //===== Sidebar Search (Demo Only) =====//
        angular.element(document).ready(function () {
            //try {

            //angular.element('#titulo').html($routeParams.url);


            App.init(); // Init layout and core plugins
            Plugins.init(); // Init all plugins
            FormComponents.init(); // Init all form-specific plugins

            angular.element('select').select2();

            angular.element('.sidebar-search').submit(function (e) {
                //e.preventDefault(); // Prevent form submitting (browser redirect)

                angular.element('.sidebar-search-results').slideDown(200);
                return false;
            });

            angular.element('.sidebar-search-results .close').click(function () {
                angular.element('.sidebar-search-results').slideUp(200);
            });

            //===== .row .row-bg Toggler =====//
            angular.element('.row-bg-toggle').click(function (e) {
                e.preventDefault(); // prevent redirect to #

                angular.element('.row.row-bg').each(function () {
                    $(this).slideToggle(200);
                });
            });

            //===== Sparklines =====//
            angular.element("#sparkline-bar").sparkline('html', {
                type: 'bar',
                height: '35px',
                zeroAxis: false,
                barColor: App.getLayoutColorCode('red')
            });

            angular.element("#sparkline-bar2").sparkline('html', {
                type: 'bar',
                height: '35px',
                zeroAxis: false,
                barColor: App.getLayoutColorCode('green')
            });

            //===== Refresh-Button on Widgets =====//
            angular.element('.widget .toolbar .widget-refresh').click(function () {
                var el = $(this).parents('.widget');

                App.blockUI(el);
                window.setTimeout(function () {
                    App.unblockUI(el);
                    noty({
                        text: '<strong>Widget updated.</strong>',
                        type: 'success',
                        timeout: 1000
                    });
                }, 1000);
            });

            //===== Fade In Notification (Demo Only) =====//
            setTimeout(function () {
                angular.element('#sidebar .notifications.demo-slide-in > li:eq(1)').slideDown(500);
            }, 3500);

            setTimeout(function () {
                angular.element('#sidebar .notifications.demo-slide-in > li:eq(0)').slideDown(500);
            }, 7000);
            /*    }
             catch (excepcion) {
             debugger;
             }*/
        });
    }
    else {
        console.log($routeParams);
        $scope.templateUrl = 'view/' + $routeParams.modulo + '/' + $routeParams.url + '.html';
    }

	$scope.tabla1=[];
    
	
}]);


//CONTROLADOR DE MENU
app_angular.controller('menuController', function ($scope, Factory) {
    $scope.menuList = [
        {
            nombre_opcion: 'Ventas', url: '#/', isSubmenu: true, icono: 'icon-bar-chart',
            submenu: [{nombre_opcion: 'Pedidos', url: '#/ventas/pedidos_ingresados'}
            ]
        },
        {
            nombre_opcion: 'Crm', url: '#/', isSubmenu: true, icono: 'icon-user',
            submenu: [{nombre_opcion: 'Clientes', url: '#/crm/terceros'}
            ]
        },
        {
            nombre_opcion: 'Configuracion', url: '#/', isSubmenu: true, icono: 'icon-cog',
            submenu: [{nombre_opcion: 'Mi Cuenta', url: '#/configuracion/mi_cuenta'}, {
                nombre_opcion: 'Cambiar Clave',
                url: '#/'
            }]
        }
    ];
});

//CONTROLADOR DEL LOGIN
app_angular.controller('loginController', function ($scope, Factory, $location, $http) {

    angular.element(document).ready(function () {
        "use strict";
        Login.init(); // Init login JavaScript
    });

    $scope.Login=function(){

        debugger;
        $http.get("https://api.github.com/users/codigofacilito/repos")
            .success(function (data) {
                debugger;
            })
            .error(function (err) {
                console.log("Error" + err);
            });

        //window.localStorage.setItem("user", "user:xxx;pass:xxxxxx;");

    }
});


//CONTROLADOR DE PANTALLA DE CALENDARIO
app_angular.controller('calendarioController', function ($scope, Factory) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var h = {};

    if (angular.element('#calendar').width() <= 400) {
        h = {
            left: 'title',
            center: '',
            right: 'prev,next'
        };
    } else {
        h = {
            left: 'prev,next',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    }

    angular.element('#calendar').fullCalendar({
        disableDragging: false,
        header: h,
        editable: true,
        events: [{
            title: 'All Day Event',
            start: new Date(y, m, 1),
            backgroundColor: App.getLayoutColorCode('yellow')
        }, {
            title: 'Long Event',
            start: new Date(y, m, d - 5),
            end: new Date(y, m, d - 2),
            backgroundColor: App.getLayoutColorCode('green')
        }, {
            title: 'Repeating Event',
            start: new Date(y, m, d - 3, 16, 0),
            allDay: false,
            backgroundColor: App.getLayoutColorCode('red')
        }, {
            title: 'Repeating Event',
            start: new Date(y, m, d + 4, 16, 0),
            allDay: false,
            backgroundColor: App.getLayoutColorCode('green')
        }, {
            title: 'Meeting',
            start: new Date(y, m, d, 10, 30),
            allDay: false,
        }, {
            title: 'Lunch',
            start: new Date(y, m, d, 12, 0),
            end: new Date(y, m, d, 14, 0),
            backgroundColor: App.getLayoutColorCode('grey'),
            allDay: false,
        }, {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            backgroundColor: App.getLayoutColorCode('purple'),
            allDay: false,
        }, {
            title: 'Click for Google',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            backgroundColor: App.getLayoutColorCode('yellow'),
            url: 'http://google.com/',
        }
        ]
    });
});