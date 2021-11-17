import React, {useState, useEffect} from 'react';
import baseURL from "./BaseURL";

function Application({name}) {
    const [json, setJson] = useState([])
    useEffect(() =>{
        fetch(`${baseURL}/applications/${name}`).then(response =>{return response.json();}).then(data =>{setJson(data)})
    })


    let output = JSON.stringify(json)
    console.log("output", output)

    return (
        <div className="Application">
            <p>{name}</p>

        </div>
    );
}

export default Application;