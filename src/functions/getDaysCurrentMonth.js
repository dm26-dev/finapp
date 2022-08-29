import { monthlyExpensesFormat } from 'helper/monthlyExpensesFormat'

export const getDaysCurrentMonth = () => {

    const d = new Date()
    const currentMonth = monthlyExpensesFormat[d.getMonth()].monthDays

    let daysMonth = []

    for (let i = 1; i <= currentMonth; i++) {
        daysMonth.push(i)
    }

    return daysMonth

}

