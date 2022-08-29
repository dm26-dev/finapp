import { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { UserContext } from 'context/UserState'
import { BsJustify } from "react-icons/bs";
import styles from "./Layout.module.scss";

export const Header = () => {

    const { setActiveSidebar, setCurrentMonth } = useContext(UserContext)

    const navigate = useNavigate()

    const redirectHome = () => {
        setCurrentMonth(1)
        navigate('/')
    }

    return (
        <div className={styles.header}>
            <span onClick={redirectHome}>{"<"}</span>
            <h2>My Billetera</h2>
            <BsJustify onClick={() => setActiveSidebar(true)} />
        </div>
    );
};
