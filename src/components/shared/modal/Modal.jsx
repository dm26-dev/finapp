import { useState, useContext } from 'react'

import { UserContext } from 'context/UserState'

import styles from './Modal.module.scss'

export const Modal = ({ viewModal, setViewModal }) => {

    const { saveExpense } = useContext(UserContext)

    const [expense, setExpense] = useState('')
    const [value, setValue] = useState('0')

    const sendExpense = (e) => {

        e.preventDefault()

        const isvalid = expense.trim().length > 0 && value.trim().length > 0

        if (isvalid) {
            saveExpense({ expense, value })
            setViewModal(false)
            setExpense('')
            setValue('0')
        } else {
            return
        }

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
                    <button>Agregar</button>
                </form>

            </div>
        )
}
