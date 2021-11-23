import React, {useState, useEffect} from 'react';
import baseURL from "./BaseURL";
import './Application.css';

function ApplicationOverview({name}) {
    let developmentConsumedAvg = 0;
    let developmentCostAvg = 0;
    let developmentCount = 0;
    let testConsumedAvg = 0;
    let testCostAvg = 0;
    let testCount = 0;
    let productionConsumedAvg = 0;
    let productionCostAvg = 0;
    let productionCount = 0;
    let locations = new Set();
    let resources = new Set();
    const [json, setJson] = useState([])
    useEffect(() =>{
        fetch(`${baseURL}/applications/${name}`).then(response =>{return response.json();}).then(data =>{setJson(data)})
    }, [])

    for(let i = 0; i < json.length; i++){
        locations.add(json[i]["ResourceLocation"])
        resources.add(json[i]["MeterCategory"])
        if(json[i]["Tags"]["environment"] === "Development"){
            developmentCount++;
            developmentConsumedAvg += parseInt(json[i]["ConsumedQuantity"], 10)
            developmentCostAvg += parseInt(json[i]["Cost"], 10)
        }else if(json[i]["Tags"]["environment"] === "Test"){
            testCount++;
            testConsumedAvg += parseInt(json[i]["ConsumedQuantity"],10)
            testCostAvg += parseInt(json[i]["Cost"], 10)
        }else if(json[i]["Tags"]["environment"] === "Production"){
            productionCount++;
            productionConsumedAvg += parseInt(json[i]["ConsumedQuantity"],10)
            productionCostAvg += parseInt(json[i]["Cost"], 10)
        }
    }
    developmentConsumedAvg /= developmentCount
    developmentCostAvg /= developmentCount

    testConsumedAvg /= testCount
    testCostAvg /= testCount

    productionConsumedAvg /= productionCount
    productionCostAvg /= productionCount


    let output = JSON.stringify(json)

    return (
        <div className="Application">
            <h1>{name}</h1>
            <div id="enviroments">
                <div className="enviroment" id="productionEnviroment">
                    <h2>Production</h2>
                    <div className="EnviromentDetails">
                        <p>Consumed Avg = {productionConsumedAvg.toFixed(1)}</p>
                        <p>Cost Avg = {productionCostAvg.toFixed(5)}</p>
                    </div>
                </div>
                <div className="enviroment" id="testEnviroment">
                    <h2>Test</h2>
                    <div className="EnviromentDetails">
                        <p>Consumed Avg = {testConsumedAvg.toFixed(1)}</p>
                        <p>Cost Avg = {testCostAvg.toFixed(5)}</p>
                    </div>
                </div>
                <div className="enviroment" id="developmentEnviroment">
                    <h2>Development</h2>
                    <div className="EnviromentDetails">
                        <p>Consumed Avg = {developmentConsumedAvg.toFixed(1)}</p>
                        <p>Cost Avg = {developmentCostAvg.toFixed(5)}</p>
                    </div>
                </div>
            </div>
            <div id="resources">
                <h2>resources:  &nbsp; &nbsp;</h2>
                <p>{Array.from(resources).join(', ')}</p>
            </div>
            <div id="locations">
                <h2>locations:  &nbsp; &nbsp;</h2>
                <p>{Array.from(locations).join(', ')}</p>
            </div>

        </div>
    );
}

export default ApplicationOverview;