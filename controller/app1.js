
app_angular.directive("myAutocomplete",function () {
	// body...
	function link(scope,element,attrs){
		$(element).autocomplete({
			source:scope[attrs.myAutocomplete],
			select: function(ev,ui){
				ev.preventDefault();
				if (ui.item) {
					scope.optionSelected(ui.item.value);
				}
			},
			focus:function(ev,ui){
				ev.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};
	return{
		link:link
	};
})

.controller("AppCtrl",function($scope,$http){
	$scope.reposts=["A","BASDAD","CASDADADADADAD","ASDADD","EASDADAD"];

	$scope.optionSelected=function(data){
		$scope.$apply(function(){
			$scope.main_repo=data;
		})
	}
});