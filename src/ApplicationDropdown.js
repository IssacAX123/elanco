import React from 'react';
import {highestDevelopmentApplicationQuantity, highestTestApplicationQuantity, highestProductionApplicationQuantity,
    highestDevelopmentApplicationCost, highestTestApplicationCost, highestProductionApplicationCost,
    lowestDevelopmentApplicationQuantity, lowestTestApplicationQuantity, lowestProductionApplicationQuantity,
    lowestDevelopmentApplicationCost, lowestTestApplicationCost, lowestProductionApplicationCost} from './SortingFilteringFunctions';
function ApplicationDropdown({json, setJson}) {

    function sortArray(){
        let option = document.getElementById("sorting").value;
        // eslint-disable-next-line default-case
        switch(option){
            case "highestDevQuantity":
                setJson(json.sort(highestDevelopmentApplicationQuantity()));
                break;
            case "highestProdQuantity":
                setJson(json.sort(highestProductionApplicationQuantity()));
                break;
            case "highestTestQuantity":
                setJson(json.sort(highestTestApplicationQuantity()));
                break;
            case "lowestDevQuantity":
                setJson(json.sort(lowestDevelopmentApplicationQuantity()));
                break;
            case "lowestProdQuantity":
                setJson(json.sort(lowestProductionApplicationQuantity()));
                break;
            case "lowestTestQuantity":
                setJson(json.sort(lowestTestApplicationQuantity()));
                break;
            case "highestDevCost":
                setJson(json.sort(highestDevelopmentApplicationCost()));
                break;
            case "highestProdCost":
                setJson(json.sort(highestProductionApplicationCost()));
                break;
            case "highestTestCost":
                setJson(json.sort(highestTestApplicationCost()));
                break;
            case "lowestDevCost":
                setJson(json.sort(lowestDevelopmentApplicationCost()));
                break;
            case "lowestProdCost":
                setJson(json.sort(lowestProductionApplicationCost()));
                break;
            case "lowestTesCost":
                setJson(json.sort(lowestTestApplicationCost()));
                break;
        }
    }
    return (
        <div className={"ApplicationDropdown"}>
            <select name="sorting" id="sorting" onChange={sortArray}>
                <option value={"highestDevQuantity"}>highest dev quantity</option>
                <option value={"highestProdQuantity"}>highest prod quantity</option>
                <option value={"highestTestQuantity"}>highest test quantity</option>
                <option value={"lowestDevQuantity"}>lowest dev quantity</option>
                <option value={"lowestProdQuantity"}>lowest prod quantity</option>
                <option value={"lowestTestQuantity"}>lowest test quantity</option>
                <option value={"highestDevCost"}>highest dev cost</option>
                <option value={"highestProdCost"}>highest prod cost</option>
                <option value={"highestTestCost"}>highest test cost</option>
                <option value={"lowestDevCost"}>lowest dev cost</option>
                <option value={"lowestProdCost"}>lowest prod cost</option>
                <option value={"lowestTestCost"}>lowest test cost</option>
            </select>
        </div>
    );
}

export default ApplicationDropdown;




