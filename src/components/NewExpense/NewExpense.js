import React from "react"
import "../stylesheets/NewExpense.css"

import NewExpenseForm from "./NewExpenseForm"

function NewExpense(props) {
    function saveNewExpense(savedExpense) {
        const newExpense = {
            ...savedExpense,
            id : Math.random().toString()
        }
        props.onAddExpense(newExpense)
    }
    return ( 
        <div className="new-expense">
            <NewExpenseForm
            onSaveNewExpense = {saveNewExpense}
            />
        </div>
    )
}

export default NewExpense