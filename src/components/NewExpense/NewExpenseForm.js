import React, { useState } from "react"
import "../stylesheets/NewExpenseForm.css"

function NewExpenseForm(props) {
    const [formData,setFormData] = useState({
        title : "",
        amount : "",
        date : ""
    })

    const [showForm,setShowForm] = useState(false)

    function openOrCloseForm() {
        setShowForm(prevValue => !prevValue)
    }

    function handleInput(e) { 
        setFormData(prevValue => {
            return {
                ...prevValue,
                // [e.target.name] : e.target.value
                [e.target.name] : e.target.type === "date" ? new Date(e.target.value) : e.target.value
            }
        })
    }
    function handleNumberInput(e) {
        setFormData(prevValue => {
            return {
                ...prevValue,
                [e.target.name] : e.target.type === "number" && + (e.target.value)
            }
        })
    }
    function submitHandler(e) {
        e.preventDefault()
        setShowForm(prevValue => !prevValue)
        props.onSaveNewExpense(formData)
        setFormData(prevValue => {
            return {
                ...prevValue,
                title : "",
                amount : "",
                date : ""
            }
        })
    }

    return (
        <form onSubmit={submitHandler}>
            {
            showForm ? 
            <div>
                <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input name="title" type="text" value={formData.title}  onChange={handleInput} required/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input name="amount" type="number" min="0.01" step="0.01" value={formData.amount}  onChange={handleNumberInput} required/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input name="date" type="date" onChange={handleInput} required/>
                </div>
                </div>
                <div className="new-expense__actions">
                <button type="button" onClick={openOrCloseForm}>Cancel</button>
                <button type="submit">Add expense</button>
                </div>
                </div>
                :
                <button onClick={openOrCloseForm}>Add new expense</button>
            }
        </form>
    )
}

export default NewExpenseForm