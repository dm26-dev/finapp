import { useState, useContext } from 'react'

// CONTEXT
import { UserContext } from 'context/UserState'

// FUNCTIONS
import { monthlyExpensesFormat } from 'helper/monthlyExpensesFormat'
import { getCurrentDay } from 'functions/getCurrentDay'
import { getDaysCurrentMonth } from 'functions/getDaysCurrentMonth'

// STYLES
import styles from './Modal.module.scss'

const initialExpenseForm = {
    expense: '',
    value: '',
    date: {
        year: '2022',
        month: '8',
        day: getCurrentDay()
    }
}

export const Modal = ({ viewModal, setViewModal }) => {

    const { saveExpense, currentMonth } = useContext(UserContext)

    const [expenseForm, setExpenseForm] = useState(initialExpenseForm)   

    const sendExpense = (e) => {
        e.preventDefault()
        const idExpense = crypto.randomUUID().slice(0, 7)
        const isvalid = expenseForm.expense.trim().length > 0 && expenseForm.value.trim().length > 0
        const newExpense = { ...expenseForm, id: idExpense }
        if (isvalid) {
            saveExpense(newExpense)
            setViewModal(false)
            setExpenseForm(initialExpenseForm)
        } else {
            return
        }
    }

    const changeDayDate = (e) => {
        setExpenseForm(prev => ({ ...prev, date: { year: '2022', month: currentMonth, day: e.target.value } }))
    }

    if (viewModal)
        return (
            <div className={styles.modal} >

                <form className={styles.modal__form} onSubmit={sendExpense}>
                    <div> <div onClick={() => setViewModal(false)}>x</div></div>
                    <label htmlFor="">Gasto</label>
                    <input type="text" value={expenseForm.expense} onChange={e => setExpenseForm(prev => ({ ...prev, expense: e.target.value }))} />
                    <label htmlFor="">Valor</label>
                    <input type="number" value={expenseForm.value} onChange={e => setExpenseForm(prev => ({ ...prev, value: e.target.value }))} />

                    <div className={styles.modal__form_date}>

                        <select name="day" id="" value={expenseForm.date.day} onChange={e => changeDayDate(e)} >
                            {getDaysCurrentMonth().map(day => <option value={day} key={day}>{day}</option>)}
                        </select>

                        <select name="month" id="" value={currentMonth} disabled>
                            {monthlyExpensesFormat.map(month => <option value={month.id} key={month.id}>{month.name}</option>)}
                        </select>

                        <select name="year" id="" value={expenseForm.date.year} disabled>
                            <option value="">2022</option>
                        </select>

                    </div>

                    <button>Agregar</button>
                </form>

            </div>
        )
}
