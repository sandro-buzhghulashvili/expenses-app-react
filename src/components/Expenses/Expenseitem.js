import React from "react"

import "../stylesheets/Expenseitem.css"
import ExpenseitemDate from "./ExpenseitemDate"

function Expenseitem(props) {
    
    return (
        <div className="expense-item">
            <ExpenseitemDate
            date = {props.date}
            />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    )
}

export default Expenseitem