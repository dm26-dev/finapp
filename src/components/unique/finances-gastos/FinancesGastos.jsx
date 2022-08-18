import { useContext } from "react";

import { UserContext } from 'context/UserState'

import st from "./FinancesGastos.module.scss";

export const FinancesGastos = ({ setViewModal }) => {

    const { monthlyExpenses, currentMonth } = useContext(UserContext)

    return (
        <div className={st.finances__gastos}>

            <div className={st.finances__gastos_header}>
                <h2>Gastos</h2>
                <button onClick={() => setViewModal(true)}>+</button>
            </div>

            <div className={st.finances__gastos_gastos}>
                {monthlyExpenses[currentMonth - 1].expenses.map((gasto) => {

                    const gast = gasto.value

                    let classSelected

                    /* TODO ESTO SE DEBE DE HACER EN UNA FUNCION APARTE */

                    const classA = st.finances__gastos_gastos_gasto_a;
                    const classM = st.finances__gastos_gastos_gasto_m;
                    const classB = st.finances__gastos_gastos_gasto_b;

                    if (gast >= 500000) {
                        classSelected = classA;
                        gasto.level = 'A'
                    } else if (gast > 200000 && gast < 500000) {
                        classSelected = classM;
                        gasto.level = 'M'
                    } else {
                        classSelected = classB
                        gasto.level = 'B'
                    }

                    return (
                        <div className={st.finances__gastos_gastos_gasto} key={gasto.id}>
                            <div>
                                <span>{gasto.expense}</span>
                            </div>

                            <div>
                                <span>{gasto.value}</span>
                                <span className={classSelected}>{gasto.level}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {
                monthlyExpenses[currentMonth - 1].expenses.length === 0 &&
                <div className={st.finances__gastos_empty}>
                    No posees gastos en { monthlyExpenses[currentMonth - 1].name}
                </div>
            }


        </div>
    );
};
