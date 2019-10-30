({
	handleCancelClick : function(component, event, helper) {
		component.destroy();
	},
    
    handleOkClick : function(component, event, helper) {
        //fire the confirmation event
        component.getEvent("confirm").fire();
        //destroy the component
		component.destroy();
	}
})
