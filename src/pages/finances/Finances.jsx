import { useState } from 'react'

import { Layout } from 'components/layout/Layout'
import { FinancesSlider } from './ch-comp/finances-slider/FinancesSlider'
import { FinancesGastos } from './ch-comp/finances-gastos/FinancesGastos'
import { Modal } from 'components/shared/modal/Modal'

import styles from './Finances.module.scss'

export const Finances = () => {

  const [viewModal, setViewModal] = useState(false)

  return (
    <Layout>
      <div className={styles.finances}>
        <FinancesSlider />
        <FinancesGastos setViewModal={setViewModal} />
        <Modal viewModal={viewModal} setViewModal={setViewModal} />
      </div>
    </Layout>
  )
};
