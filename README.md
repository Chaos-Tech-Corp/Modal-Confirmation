# Modal Confirmation Dialog

This component creates a modal confirmation dialog to simulate the javascript `confirm()` function using the lightning design system look and feel, providing callback support for the _yes/ok_ action, allowing parameters to be passed through it.

![modal confirmation example](assets/modal_dialog_example.png?raw=true)

## Usage

Define `modal_confirmation` component in a custom component markup:

```xml
<aura:component>

    <c:modal_confirmation title="Modal Confirmation Box" 
                          tagline="This is a modal confirmation box" 
                          message="Are you sure you want to continue?" 
                          confirm="{!c.handleConfirm}"/>

</aura:component>
```

or create it dinamycally in a controller:

```xml
<aura:component>

    <lightning:button label="Show Confirmation Box" onclick="{!c.showConfirmation}"/>
    
    {!v.body}

</aura:component>
```

```JavaScript
({
    showConfirmation : function(cmp) {
        $A.createComponent(
            "c:modal_confirmation",
            {
                "title": "Modal Confirmation Box",
                "tagline": "This is a modal confirmation box",
                "message": "Are you sure you want to continue?",
                "confirm": cmp.getReference("c.handleConfirm"),
                "param": cmp.get("v.RecordId");
            },
            function(modalWindow, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    var body = cmp.get("v.body");
                    body.push(modalWindow);
                    cmp.set("v.body", body);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            }
        );
    },

    handleConfirm : function(cmp, event, helper) {
        //retrieve the value of the parameter
        var recordId = event.getParam("v.param");
        
        // Add your confirmation logic here ...
    }
})
```

## Properties

- `title` _(String)_ - The title of the modal window _(optional)_.
- `tagline` _(String)_ - The tagline of the modal window, below the title. Visisble only if the `title` is defined _(optional)_.
- `message` _(String)_ - The body of the modal window _(optional)_.
- `isHtml` _(Boolean)_ - Default value is _false_. Indicates whether the message contains HTML or just plain text _(optional)_.
- `confirm` _(Function)_ - Reference to the callback function for the _yes/ok_ action  _(optional)_.
- `param` _(Object)_ - Parameter to pass to the `confirm` function.  _(optional)_.

###### NOTES &amp; CONSIDERATIONS

If the title is not specified, it won't display the header. Also, if all parameters are left empty it will show an empty modal window with just the two actio buttons.

The component requires the event to be able to provide the callback to the parent component.
