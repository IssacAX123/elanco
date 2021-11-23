import React from 'react';
import baseURL from "./BaseURL";
import {useEffect, useState} from "react";
import ApplicationOverview from "./ApplicationOverview";
import {Link} from "react-router-dom";

function ApplicationsList(props) {
    const [resourceJson, setResourcesJson] = useState([])
    useEffect(() =>{
        fetch(`${baseURL}/resources/`).then(response =>{return response.json();}).then(data =>{setResourcesJson(data)})
    }, [])

    const [json, setJson] = useState([])
    useEffect(() =>{
        fetch(`${baseURL}/applications/`).then(response =>{return response.json();}).then(data =>{setJson(data)})
    }, [json])

    return (
        <div>
            <div id="filter">
                {resourceJson.map((item) => <div className={"checkbox"}><input type="checkbox" id={item} name={item} value={item}/><label
                    htmlFor={item}>{item}</label></div>)}
            </div>
            {json.map(item => <Link style={{ textDecoration: 'none'}} to={"/"+item}><ApplicationOverview name={item}/></Link>)}
        </div>
    );
}

export default ApplicationsList;