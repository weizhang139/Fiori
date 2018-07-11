jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"exc15/sap/demo/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"exc15/sap/demo/test/integration/pages/Worklist",
		"exc15/sap/demo/test/integration/pages/Object",
		"exc15/sap/demo/test/integration/pages/NotFound",
		"exc15/sap/demo/test/integration/pages/Browser",
		"exc15/sap/demo/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "exc15.sap.demo.view."
	});

	sap.ui.require([
		"exc15/sap/demo/test/integration/WorklistJourney",
		"exc15/sap/demo/test/integration/ObjectJourney",
		"exc15/sap/demo/test/integration/NavigationJourney",
		"exc15/sap/demo/test/integration/NotFoundJourney",
		"exc15/sap/demo/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});