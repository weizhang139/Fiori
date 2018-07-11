sap.ui.define([
		"exc15/sap/demo/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("exc15.sap.demo.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);