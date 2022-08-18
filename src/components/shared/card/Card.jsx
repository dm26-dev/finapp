import styles from './Card.module.scss'

import { UserContext } from 'context/UserState'

import { useContext } from 'react'

export const Card = () => {

    const { monthlyExpenses, currentMonth } = useContext(UserContext)

    const arrayExpenses = monthlyExpenses[currentMonth - 1].expenses

    const newArray = arrayExpenses.map(exp => parseInt(exp.value))

    const sumExpenses = newArray.reduce((a, b) => a + b, 0);


    return (
        <div className={styles.card}>
            <h2>{monthlyExpenses[currentMonth - 1].name}</h2>

            <div className={styles.card__monto}>
                <h1>{sumExpenses}</h1>
                <span>A : 12</span> <span>M : 7</span> <span>B : 6</span>
            </div>

        </div>
    )
}
