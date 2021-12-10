import React from "react";



function FeaturesButton({feature}) {                                  //function component (like a class) which is why it starts with a capital letter.
    

    function setAccessory() {
        console.log('You clicked submit.');
                                                                      //event listener, logs in DOM when clicked, easy to see what is working/not working.
    }
                                                                      //onClick calls features button in section beacuse it needs to go somewhere (maybe try without amd see what happens).
    
    return <button onClick={setAccessory}>{feature} Button</button>   //always return HTML (HTML returns don't need semi-colons)
}

export default FeaturesButton;