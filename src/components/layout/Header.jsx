import { useContext } from 'react'

import styles from "./Layout.module.scss";
import { BsJustify } from "react-icons/bs";

import { useNavigate } from 'react-router-dom'

import { UserContext } from 'context/UserState'

import { monthlyExpensesFormat } from 'helper/monthlyExpensesFormat'

export const Header = () => {

    const { setMonthlyExpenses } = useContext(UserContext)

    const navigate = useNavigate()

    const redirectHome = () => {
        // PRUEBAS ELIMINAR DESPUES
        setMonthlyExpenses(monthlyExpensesFormat)
        navigate('/')
    }

    return (
        <div className={styles.header}>
            <span onClick={redirectHome}>{"<"}</span>
            <h2>My Billetera</h2>
            <BsJustify />
        </div>
    );
};
