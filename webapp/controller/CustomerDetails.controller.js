sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "sap/ui/core/Fragment" 
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Formatter, Fragment) {
        "use strict";

        return Controller.extend("stk.starterkit1.controller.CustomerDetails", {
            formatter: Formatter, 

            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
            },

            _onPatternMatched: function (oEvent) {
                this.getView().bindElement({
                    path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                    parameters: {
                        
                        expand: "Orders, Orders/Employee"
                        
                    }
                });
            },

            onPress: function (oEvent){

                var oView = this.getView();

                if(!this.byId("contactDialog")) {

                    Fragment.load({

                        id: oView.getId(),
                        name: "stk.starterkit1.view.ContactInfoDialog",
                        controller: this

                    }).then(function (oDialog){

                        oView.addDependent(oDialog);
                        oDialog.open();

                    });
                    }else{

                        this.byId("contactDialog").open();

                    } 

                },


            onPressClose: function (oEvent){

                this.byId("contactDialog").close();

                }



        });
    });
