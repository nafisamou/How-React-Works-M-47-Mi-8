import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [Steps, setSteps] = useState(0);
    const increaseSteps = ()=> setSteps(Steps + 1);
    useEffect(()=>{
    console.log(Steps);
    },[Steps])
    return (
        <div>
           <h1>This is my smart watch</h1> 
           <h2>My Current Steps : {Steps}</h2>
           <button onClick={increaseSteps}>De dour .......</button>
        </div>
    );
};

export default Watch;
