import React from "react";

import "../stylesheets/ExpensesList.css"

function ExpensesList(props) {
    if(props.expenses.length === 0) {
        return (
            <h3 className="expenses-list__fallback">Found no expenses</h3>
        )
    }
    return (
        <ul className="expenses-list">
        {props.expenses}
        </ul>
    )
}

export default ExpensesList