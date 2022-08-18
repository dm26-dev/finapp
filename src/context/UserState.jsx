import { useState, createContext } from "react";

export const UserContext = createContext(null);

export const UserState = ({ children }) => {
    const [currentMonth, setCurrentMonth] = useState(1);

    const [monthlyExpenses, setMonthlyExpenses] = useState([
        {
            id: 1,
            name: "Enero",
            expenses: [],
        },
        {
            id: 2,
            name: "Febrero",
            expenses: [],
        },
        {
            id: 3,
            name: "Marzo",
            expenses: [],
        },
        {
            id: 4,
            name: "Abril",
            expenses: [],
        },
        {
            id: 5,
            name: "Mayo",
            expenses: [],
        },
        {
            id: 6,
            name: "Junio",
            expenses: [],
        },
        {
            id: 7,
            name: "Julio",
            expenses: [],
        },
        {
            id: 8,
            name: "Agosto",
            expenses: [],
        },
        {
            id: 9,
            name: "Septiembre",
            expenses: [],
        },
        {
            id: 10,
            name: "Octubre",
            expenses: [],
        },
        {
            id: 11,
            name: "Noviembre",
            expenses: [],
        },
        {
            id: 12,
            name: "Diciembre",
            expenses: [],
        },
    ]);

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
