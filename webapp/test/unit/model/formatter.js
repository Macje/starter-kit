sap.ui.define ([
    "stk/starterkit1/model/formatter"
], function (formatter) {
    "use strict";

    QUnit.module("Name formatting");

    function nameFormattingTest(oOptions) {
        //Act
        var sName = formatter.formatName(oOptions.firstName, oOptions.lastName);

        //Assert
        oOptions.assert.strictEqual(sName, oOptions.expected, "the name was corrctly formatted: " + sName);
    }

    QUnit.test("Should format 'Grzegorz Malczewski' to 'G. Malczewski'", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Grzegorz",
            lastName: "Malczewski",
            expected: "G. Malczewski"
        });
    });

    QUnit.test("Shoud format 'Wojciech Piestrzak' to 'W. Piestrzak'", function (assert) {
        nameFormattingTest.call(this, {
            assert: assert,
            firstName: "Wojciech",
            lastName: "Pietrzak",
            expected: "W. Pietrzak"
        });
    });
});