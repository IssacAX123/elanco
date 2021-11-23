import React from 'react';
import baseURL from "./BaseURL";
import {useEffect, useState} from "react";
import ApplicationOverview from "./ApplicationOverview";
import {Link} from "react-router-dom";
import './ApplicationList.css';
import {filterResource} from './SortingFilteringFunctions'
import ApplicationDropdown from "./ApplicationDropdown";

function ApplicationsList(props) {
    const [resourceJson, setResourcesJson] = useState([])
    useEffect(() =>{
        fetch(`${baseURL}/resources/`).then(response =>{return response.json();}).then(data =>{setResourcesJson(data)})
    }, [])

    let [json, setJson] = useState([])
    useEffect(() =>{
        fetch(`${baseURL}/applications/`).then(response =>{return response.json();}).then(data =>{setJson(data)})
    }, [])


    return (
        <div>
            {json.map(item => <Link style={{ textDecoration: 'none'}} to={"/"+item}><ApplicationOverview name={item}/></Link>)}
        </div>
    );
}

export default ApplicationsList;