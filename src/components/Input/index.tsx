import { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}
export default function Input({ name, label, ...rest }: Props) {
  return (
    <div className={styles.FormGroup}>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </div>
  )
}
