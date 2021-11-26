import React from "react";

function AccessoriesButton() {                                              //function component (like a class) which is why it starts with a capital letter.

    function setAccessory() {
        console.log('You clicked submit.');                                 //event listener, logs in DOM when clicked, easy to see what is working/not working.
    }
    return <button onClick={setAccessory}>Accessories Button</button>;      //onClick calls acessory button
}

export default AccessoriesButton;