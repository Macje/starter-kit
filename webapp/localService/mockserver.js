sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/Log"
], function (MockServer, Log) {
    "use strict";
    return {
        init: function () {
            // create
            var oMockServer = new MockServer({
                rootUri: "/V2/Northwind/Northwind.svc/"
            });
            // simulate against the metadata and mock data
            oMockServer.simulate("../localService/metadata.xml", {
                sMockdataBaseUrl: "../localService/mockdata",
                bGenerateMissingMockData: true
            })
            // start
            oMockServer.start();
            Log.info("Running the app with mock data");
        }
    };

});
