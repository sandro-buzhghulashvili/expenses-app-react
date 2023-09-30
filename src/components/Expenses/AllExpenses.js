import React, {useState} from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Expenseitem from "./Expenseitem";
import "../stylesheets/AllExpenses.css"

function AllExpenses(props) {
    const [selectedYear,setSelectedYear] = useState("2022")
    const filteredExpenses = props.expenseData.filter(expense => {
        return expense.date.getFullYear() === Number(selectedYear)
    })
    const allExpenseItems = filteredExpenses.map(expenseItem => {
        return (
            <li key={expenseItem.id}>
            <Expenseitem
            title = {expenseItem.title}
            amount = {expenseItem.amount}
            date = {expenseItem.date}
            key = {expenseItem.id}
            />
            </li>
        )
    })

    function selectYearHandler(selectedYear) {
        setSelectedYear(selectedYear)
    }

    return (

        <div className="expenses">
            <ExpensesFilter
            onSelectYear = {selectYearHandler}
            filteredYear = {selectedYear}
            />
            {
                filteredExpenses.length > 0 &&
                <ExpensesChart
                expenses = {filteredExpenses}
            />
            }
            <ExpensesList
            expenses = {allExpenseItems}
            />
        </div>
    )
}

export default AllExpenses