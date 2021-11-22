import React, {useEffect, useState} from 'react';
import baseURL from "./BaseURL";
import ApplicationOverview from "./ApplicationOverview";
import ApplicationInstance from "./ApplicationInstance";

function ApplicationPage({name}) {
    const [json, setJson] = useState([])
    useEffect(() =>{
        fetch(`${baseURL}/applications/${name}`).then(response =>{return response.json();}).then(data =>{setJson(data)})
        console.log(`${baseURL}/applications/${name}`)
    })
    console.log(json)
    return (
        <div className="ApplicationPage">
            {json.map(item => <ApplicationInstance jsoni={item}/>)}
        </div>
    );
}

export default ApplicationPage;