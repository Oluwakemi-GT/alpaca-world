import React from "react";
import FeaturesButton from "./features-button";


// Good practice to have a page, to break down code. Especially for multipage website.
// Button interaction: Type A button, when clicked, activates type B buttons, which when clicked, passes info to change alpaca image.
//Buttons: Background, Hair, Ear, Eye, Legs, Mouth, Neck, Accessories, Nose

function Page() {

    const featureList = ['Background', 'Hair', 'Ears', 'Eyes', 'Legs', 'Mouths', 'Necks', 'Accessories'];

    const featureButtons = 'Ears';
// const featureButtons = featureList.map((feature) =>                                           //function to create feature button from looping feature list.



    return <div>
        <section>{featureButtons}</section>
        <h1> This is a panel.</h1>
        <FeaturesButton feature='Ears'/>
    </div>;


}

export default Page;