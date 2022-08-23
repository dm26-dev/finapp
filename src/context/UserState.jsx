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
        const newExpenses = monthlyExpenses.find(
            (expense) => expense.id === currentMonth
        );

        newExpenses.expenses = [...newExpenses.expenses, expense];

        setMonthlyExpenses([...monthlyExpenses, newExpenses]);
    };

    return (
        <UserContext.Provider
            value={{ monthlyExpenses, saveExpense, currentMonth, setCurrentMonth }}
        >
            {children}
        </UserContext.Provider>
    );
};
