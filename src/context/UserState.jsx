import { useState, useEffect, createContext } from "react";
import { monthlyExpensesFormat } from 'helper/monthlyExpensesFormat'

export const UserContext = createContext(null);

const initialState = () => {
    const monthlyExpensesLS = JSON.parse(localStorage.getItem('monthlyExpenseLS')) || monthlyExpensesFormat
    return monthlyExpensesLS
}

export const UserState = ({ children }) => {
    const [currentMonth, setCurrentMonth] = useState(1);
    const [monthlyExpenses, setMonthlyExpenses] = useState(initialState());

    useEffect(() => {
        localStorage.setItem('monthlyExpenseLS', JSON.stringify(monthlyExpenses))
    }, [monthlyExpenses])

    const saveExpense = (expense = {}) => {
        const newMonthlyExpenses = [...monthlyExpenses]
        newMonthlyExpenses[currentMonth - 1].expenses.push(expense)
        setMonthlyExpenses(newMonthlyExpenses);
    };

    const deleteExpense = (id = '') => {

        const newMonthlyExpenses = [...monthlyExpenses]

        const monthExpense = newMonthlyExpenses[currentMonth - 1]

        const expenses = monthExpense.expenses

        const newExpenses = expenses.filter(exp => exp.id !== id)

        newMonthlyExpenses[currentMonth - 1].expenses = newExpenses

        setMonthlyExpenses(newMonthlyExpenses)

    }


    return (
        <UserContext.Provider
            value={{ monthlyExpenses, saveExpense, deleteExpense, currentMonth, setCurrentMonth, setMonthlyExpenses }}
        >
            {children}
        </UserContext.Provider>
    );
};
