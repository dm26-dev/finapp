
import { useContext } from 'react'
import { UserContext } from 'context/UserState'
import { Chart } from "react-google-charts";

import { Layout } from 'components/layout/Layout'
import styles from './Statistics.module.scss'

export const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
};

export const Statistics = () => {

    const { monthlyExpenses } = useContext(UserContext)

    const newData = monthlyExpenses.map(data => {
        const arrayNumbers = data.expenses.map(exp => Number(exp.value))
        let total = arrayNumbers.reduce((a, b) => a + b, 0);
        console.log(total);
        return [data.name.substring(0, 3), total]
    })

    return (
        <Layout urlRedirect={'/finances'}>
            <div className={styles.statistics}>

                <div className={styles.statistics__chart}>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="500px"
                        data={[["Month", "Month"], ...newData]}
                        options={options}
                    />
                </div>

                <div className={styles.statistics__expenses}>
                    {newData.map(exp => {
                        return (
                            <div className={styles.statistics__expenses_total} key={exp[0]} >
                                <span>
                                    {exp[0]}
                                </span>
                                <span>
                                    {exp[1]}
                                </span>
                            </div>
                        )
                    })}
                </div>

            </div>
        </Layout>
    )
}
