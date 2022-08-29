import styles from './Layout.module.scss'

import { useContext } from 'react'

import { UserContext } from 'context/UserState'


export const Backdrop = () => {

    const { activeSidebar, setActiveSidebar } = useContext(UserContext)

    if (activeSidebar) {
        return (
            <div className={styles.backdrop} onClick={() => setActiveSidebar(false)} ></div>
        )
    }
    else {
        return null

    }
}
