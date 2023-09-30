import React from "react";

import ChartBar from "./ChartBar";
import "../stylesheets/Chart.css"

function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const topExpense = Math.max(...dataPointValues)
    
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => {
                return (
                <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={topExpense}
                label = {dataPoint.label}
                />
                )
            })}
        </div>
    )
}

export default Chart