sap.ui.define([
    "sap/ui/core/mvc/Controller"
    // "sap/ui/model/json/JSONModel"
],
    /**
     *@param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("stk.starterkit1.controller.CustomerPerformance", {

            onInit: function () {
                
            },

           onMotivate: function (oEvent) {
                var oEmployee = oEvent.getSource().getBindingContext().getObject();
                var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@<your_domain_name_goes_here>.com";
                var sSubject = "Good job!";
                var sBody = "You are doing well, thank you!";
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
            },

// JQUERY AJAX:
            
            // onFire: function (oEvent) {
            //     var oEmployee = oEvent.getSource().getBindingContext().getObject();
            //     var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@<your_domain_name_goes_here>.com";
            //     var sSubject = "not a good job!";
                // $.ajax({
                //     url: "/generate_insult.php",
                //     data: {
                //         lang: "en",
                //         type: "json"
                //     },

                //     success: function (oResponse) {
                //         var sBody = oResponse.insult;
                //         sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                //     }
                
                // });
        //    }
        
// JSON MODEL:

        onFire: function (oEvent) {

            // this.getView().setModel(oModel, "motivationalModel");
            // var oModel = this.getView().setModel(oModel, "motivationalModel");
            var oModel = new sap.ui.model.json.JSONModel();
            
            var oEmployee = oEvent.getSource().getBindingContext().getObject();
            var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@<your_domain_name_goes_here>.com";
            var sSubject = "not a good job!";

            oModel.loadData("/generate_insult.php", {
                lang: "en",
                type: "json"
            }).then(function () {
                var sBody = oModel.getData().insult;
                sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
            });

 
         
       }







        });
    });
