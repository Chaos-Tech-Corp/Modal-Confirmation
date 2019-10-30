({
    afterRender: function (component, helper) {
        this.superAfterRender();
        
        //handle they keypress event to remove the component
        window.addEventListener("keydown", 
                                function _clickFunction(event) {
                                    if (event.key === 'Escape' || event.keyCode === 27) {
                                        window.removeEventListener("keydown", _clickFunction, true);
                                        component.destroy();
                                    }
                                }
                                , true);
    }
    
})
