import React from 'react';
import baseURL from "./BaseURL";
import {useEffect, useState} from "react";
import ApplicationOverview from "./ApplicationOverview";
import {Link} from "react-router-dom";

function ApplicationsList(props) {
    const [json, setJson] = useState([])
    useEffect(() =>{
        fetch(`${baseURL}/applications/`).then(response =>{return response.json();}).then(data =>{setJson(data)})
    }, [])

    return (
        <div>
            {json.map(item => <Link to={"/"+item}><ApplicationOverview name={item}/></Link>)}
        </div>
    );
}

export default ApplicationsList;