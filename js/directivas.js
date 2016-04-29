/**
 * Created by dev10 on 1/7/2016.
 */
//interacion de jquery y angular practicoo en las directivas
//Andres AutoCompletar
app_angular.directive("myAutocomplete",function () {
    // body...
    function link(scope,element,attrs){
        $(element).autocomplete({
            source:scope[attrs.myAutocomplete],
            select: function(ev,ui){
                ev.preventDefault();
                scope.optionSelected(ui.item.value);
                if (ui.item) {
                    
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

