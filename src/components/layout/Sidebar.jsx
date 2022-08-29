import { useContext } from 'react'

import styles from './Layout.module.scss'

import { UserContext } from 'context/UserState'

export const Sidebar = () => {

    const { activeSidebar } = useContext(UserContext)

    const st = styles.sidebar
    const st1 = `${styles.sidebar} ${styles.sidebar__active}`

    return (
        <div className={activeSidebar ? st1 : st} >

            <h3>PERFIL</h3>

            <img src="https://i.pinimg.com/originals/04/d5/07/04d507a4ea1e077bbdc40f6554cbc8dc.jpg" alt="User" />

            <form action="">
                <label htmlFor="">Usuario</label>
                <input type="text" />
                <label htmlFor="">Salario</label>
                <input type="text" />
                <button>Guardar</button>
            </form>

        </div >
    )
}
