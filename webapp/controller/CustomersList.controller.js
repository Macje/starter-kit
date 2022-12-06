sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.starterkit1.controller.CustomersList", {
            onInit: function () {
            },

            onCustomerPress: function (oEvent){ 
                
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                
                oRouter.navTo("CustomerDetails", {
                    CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID,
                    CompanyName: oEvent.getSource().getBindingContext().getObject().CompanyName
                });
            },
            
            onPressAdd: function (oEvent){
                
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                
                oRouter.navTo("AddCustomer");

            },

            onPressPerformance: function (oEvent){
                
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                
                oRouter.navTo("CustomerPerformance");

            }
  
          


        });
    });
 