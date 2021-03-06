import React, {useEffect, useState} from 'react';
import baseURL from "./BaseURL";
import './ApplicationInstance.css';

function ApplicationInstance({jsoni}) {
    return (
        <div className="ApplicationInstance">
            <h1>{jsoni['InstanceId']}</h1>
            <h2>{jsoni['Tags']['environment']}</h2>
            <div className="instanceEnviromentDetails">
                <p>Consumed Avg = {parseInt(jsoni['ConsumedQuantity']).toFixed(1)}</p>
                <p>Cost Avg = {parseInt(jsoni['Cost']).toFixed(5)}</p>
            </div>
            <div id="linstanceLocations">
                <h2>locations:  &nbsp; &nbsp;</h2>
                <p>{jsoni['Location']}</p>
            </div>
            <div id="instanceResource">
                <h2>resource:  &nbsp; &nbsp;</h2>
                <p>{jsoni['MeterCategory']}</p>
            </div>
            <div id="instanceDate">
                <h2>date:  &nbsp; &nbsp;</h2>
                <p>{jsoni['Date']}</p>
            </div>

        </div>
    );
}

export default ApplicationInstance;