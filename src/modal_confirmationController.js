({
	handleCancelClick : function(component, event, helper) {
		component.destroy();
	},

	handleOkClick : function(component, event, helper) {

		//fire the confirmation event
		var confirmEvent = component.getEvent("confirm");
		confirmEvent.setParam("param", component.get("v.param"));
		confirmEvent.fire();

		//destroy the component
		component.destroy();
	}
})
