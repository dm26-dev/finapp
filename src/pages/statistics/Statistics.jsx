
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

const generateRandomIntegerInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Statistics = () => {

    const { monthlyExpenses } = useContext(UserContext)
 
    const newData = monthlyExpenses.map(data => {
        return [data.name.substring(0, 3), generateRandomIntegerInRange(10, 1000000)]
    })

    return (
        <Layout>
            <div style={{ padding: '10px' }}>
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={[["Month", "Month"], ...newData]}
                    options={options}
                />
            </div>
        </Layout>
    )
}
