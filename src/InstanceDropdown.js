import React from 'react';
import {highestInstanceCost, highestInstanceQuantity, lowestInstanceQuantity, lowestInstanceCost} from './SortingFilteringFunctions';
function InstanceDropdown({json, setJson}) {

    function sortArray(){
        let option = document.getElementById("sorting").value;
        // eslint-disable-next-line default-case
        switch(option){
            case "highestInstanceCost":
                setJson([...json].sort((a, b) => highestInstanceCost(a, b)));
                break;
            case "lowestInstanceCost":
                setJson([...json].sort((a, b) => lowestInstanceCost(a, b)));
                break;
            case "highestInstanceQuantity":
                setJson([...json].sort((a, b) => highestInstanceQuantity(a, b)));
                break;
            case "lowestInstanceQuantity":
                setJson([...json].sort((a, b) => lowestInstanceQuantity(a, b)));
                break;
        }
    }
    return (
        <div className={"ApplicationDropdown"}>
            <select name="sorting" id="sorting" onChange={sortArray}>
                <option value={"highestInstanceCost"}>highest cost</option>
                <option value={"lowestInstanceCost"}>lowest cost</option>
                <option value={"highestInstanceQuantity"}>highest quantity</option>
                <option value={"lowestInstanceQuantity"}>lowest quantity</option>
            </select>
        </div>
    );
}

export default InstanceDropdown;




