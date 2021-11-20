import React from 'react';
import baseURL from "./BaseURL";
import {useEffect, useState} from "react";
import Application from "./Application";

function ApplicationsList(props) {
    const [json, setJson] = useState([])
    useEffect(() =>{
        fetch(`${baseURL}/applications/`).then(response =>{return response.json();}).then(data =>{setJson(data)})
    }, [])

    return (
        <div>
            {json.map(item => <Application name={item}/>)}
        </div>
    );
}

export default ApplicationsList;