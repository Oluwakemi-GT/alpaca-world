import React from "react";

//Buttons: Background, Hair, Ear, Eye, Legs, Mouth, Neck, Accessories, Nose


function AccessoriesPanel() {                                              //function component (like a class) which is why it starts with a capital letter.
    const featureList = ['Background', 'Hair', 'Ears', 'Eyes', 'Legs', 'Mouths', 'Necks', 'Accessories']; 

    const featureButtons = featureList.map((feature) =><button onClick={setAccessory}>{feature} Button</button> ); //function to create feature button from looping feature list. 
    console.log (featureButtons) 

    function setAccessory() {
        console.log('You clicked submit.');                                 //event listener, logs in DOM when clicked, easy to see what is working/not working.
    }
    return <section>{featureButtons}</section>    //onClick calls features button in section beacuse it needs to go somewhere (maybe try without amd see what happens).
}

export default AccessoriesPanel;