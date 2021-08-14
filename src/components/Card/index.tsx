import Image from 'next/image'
import styles from './styles.module.scss'
import IconActive from 'assets/icon_online.svg'

export default function Card() {
  return (
    <div className={styles.Card}>
      <div className={styles.CardHeader}>
        <h4>test_db</h4>
        <Image src={IconActive} alt="Online" title="Funcionando" />
      </div>
      <div className={styles.CardBody}>
        <p>1% used</p>
        <button>informations</button>
      </div>
    </div>
  )
}
