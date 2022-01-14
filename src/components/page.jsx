import React, {useState} from "react";
import FeaturesButton from "./features-button";


// Good practice to have a page, to break down code. Especially for multipage website.
// Button interaction: Type A button, when clicked, activates type B buttons, which when clicked, passes info to change alpaca image.
//Buttons: Background, Hair, Ear, Eye, Legs, Mouth, Neck, Accessories, Nose

function Page() {

    const featureList = ['Background', 'Hair', 'Ears', 'Eyes', 'Legs', 'Mouths', 'Necks', 'Accessories'];  //array
    const [feature, setFeature] = useState('Hair');   // current feature, function to set new feature, default setting

    const updateFeature = (newFeature) => {        //this function updates the feature
        setFeature(newFeature)
        console.log(feature)
    }
       
    


    //below is a map funtion to reiterate items in featureList array. Key is used to create unique identifiers for each button. Only needed when there is a list of things.                                
    return <div>
        <h1> This is a panel.</h1>
        {featureList.map((feature) => <FeaturesButton key={feature} featureName={feature} updateFeature={updateFeature}/>)}     
    </div>;


}

export default Page;