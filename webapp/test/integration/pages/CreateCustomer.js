sap.ui.define([
    "sap/ui/test/Opa5"

], function(Opa5) {
    'use strict';

    var sViewName = "AddCustomer";

    Opa5.createPageObjects({
        onCreateCustomer: {

            actions: {  },

            assertions: { 
                
				iShouldSeeThePage: function () {
					return this.waitFor({
						id: "addCustomer",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " page is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " page"
					});
				}
 

            }
        }
    });
    
    
});