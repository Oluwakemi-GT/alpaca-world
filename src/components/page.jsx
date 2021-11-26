import React from "react";
import AccessoriesButton from "./accessories-button";


// Good practice to have a page, to break down code. Especially for multipage website.
// Button interaction: Type A button, when clicked, activates type B buttons, which when clicked, passes info to change alpaca image.
// 

function Page() {

    return <div>
        <h1> This is a panel.</h1>
        <AccessoriesButton />
    </div>;
    
}

export default Page;