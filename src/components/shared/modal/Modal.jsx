import { useState, useContext } from 'react'

import { UserContext } from 'context/UserState'

import styles from './Modal.module.scss'

import { monthlyExpensesFormat } from 'helper/monthlyExpensesFormat'

const days = (number = 3) => {

    let daysMonth = []

    for (let i = 1; i <= number; i++) {
        daysMonth.push(i)
    }

    return daysMonth

}



export const Modal = ({ viewModal, setViewModal }) => {

    const { saveExpense, currentMonth } = useContext(UserContext)

    const [expense, setExpense] = useState('')
    const [value, setValue] = useState('0')

    // CAPTURAR LOS DATOS PARA INICIALIZAR LA FECHA CON LA ACTUAL CON DAYJS O MOMENTJS O OTRA
    // YA QUE MOMENT ESTA OBSOLETA

    const [date, setDate] = useState({
        year: '2022',
        month: '8',
        day: '22'
    })

    const sendExpense = (e) => {

        e.preventDefault()

        const isvalid = expense.trim().length > 0 && value.trim().length > 0

        if (isvalid) {
            saveExpense({ expense, value, date })
            setViewModal(false)
            setExpense('')
            setValue('0')
        } else {
            return
        }

    }

    const changeDayDate = (e) => {
        setDate({ year: '2022', month: currentMonth,day:e.target.value })
    }

    if (viewModal)
        return (
            <div className={styles.modal} >

                <form className={styles.modal__form} onSubmit={sendExpense}>
                    <div> <div onClick={() => setViewModal(false)}>x</div></div>
                    <label htmlFor="">Gasto</label>
                    <input type="text" value={expense} onChange={e => setExpense(e.target.value)} />
                    <label htmlFor="">Valor</label>
                    <input type="number" value={value} onChange={e => setValue(e.target.value)} />

                    <div className={styles.modal__form_date}>

                        <select name="day" id="" value={date.day} onChange={e => changeDayDate(e)} >
                            {days(31).map(day => <option value={day} key={day}>{day}</option>)}
                        </select>

                        <select name="month" id="" value={currentMonth} disabled>
                            {monthlyExpensesFormat.map(month => <option value={month.id} key={month.id}>{month.name}</option>)}
                        </select>

                        <select name="year" id="" value={date.year} disabled>
                            <option value="">2022</option>
                        </select>

                    </div>

                    <button>Agregar</button>
                </form>

            </div>
        )
}
