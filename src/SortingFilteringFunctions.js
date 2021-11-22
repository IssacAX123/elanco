export const  highestDevelopmentApplicationQuantity = (a, b) =>{
    return (a.developmentConsumedAvg > b.developmentConsumedAvg) ? -1 : 1
}
export const  highestTestApplicationQuantity = (a, b) =>{
    return (a.testConsumedAvg > b.testConsumedAvg) ? -1 : 1
}
export const  highestProductionApplicationQuantity = (a, b) =>{
    return (a.productionConsumedAvg > b.productionConsumedAvg) ? -1 : 1
}
export const  highestDevelopmentApplicationCost = (a, b) =>{
    return (a.developmentCostAvg > b.developmentCostAvg) ? -1 : 1
}
export const  highestTestApplicationCost = (a, b) =>{
    return (a.testConsumedCost > b.testConsumedCost) ? -1 : 1
}
export const  highestProductionApplicationCost = (a, b) =>{
    return (a.productionCostAvg > b.productionCostAvg) ? -1 : 1
}


export const  lowestDevelopmentApplicationQuantity = (a, b) =>{
    return (a.developmentConsumedAvg < b.developmentConsumedAvg) ? -1 : 1
}
export const  lowestTestApplicationQuantity = (a, b) =>{
    return (a.testConsumedAvg < b.testConsumedAvg) ? -1 : 1
}
export const  lowestProductionApplicationQuantity = (a, b) =>{
    return (a.productionConsumedAvg < b.productionConsumedAvg) ? -1 : 1
}
export const  lowestDevelopmentApplicationCost = (a, b) =>{
    return (a.developmentCostAvg < b.developmentCostAvg) ? -1 : 1
}
export const  lowestTestApplicationCost = (a, b) =>{
    return (a.testConsumedCost < b.testConsumedCost) ? -1 : 1
}
export const  lowestProductionApplicationCost = (a, b) =>{
    return (a.productionCostAvg < b.productionCostAvg) ? -1 : 1
}

export const  highestInstanceCost = (a, b) =>{
    return (parseInt(a["Cost"]) > parseInt(b["Cost"])) ? -1 : 1
}
export const  highestInstanceQuantity = (a, b) =>{
    return (parseInt(a["ConsumedQuantity"]) > parseInt(b["ConsumedQuantity"])) ? -1 : 1
}

export const  lowestInstanceCost = (a, b) =>{
    return (parseInt(a["Cost"]) < parseInt(b["Cost"])) ? -1 : 1
}
export const  lowestInstanceQuantity = (a, b) =>{
    return (parseInt(a["ConsumedQuantity"]) < parseInt(b["ConsumedQuantity"])) ? -1 : 1
}

export const  filterResource = (resource) =>{
    return function(e){
        return e.resources.has(resource);
    }
}