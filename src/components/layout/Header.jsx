import styles from "./Layout.module.scss";
import { BsJustify } from "react-icons/bs";

import { useNavigate } from 'react-router-dom'

export const Header = () => {

    const navigate = useNavigate()

    const redirectHome=()=> {
        navigate('/')
    }

    return (
        <div className={styles.header}>
            <span onClick={redirectHome}>{"<"}</span>
            <h2>My Billetera</h2>
            <BsJustify />
        </div>
    );
};
