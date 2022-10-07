import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Numbers from '../services/numbers'

export default function Home() {
  const [userNumbers, setUserNumbers] = useState([])

  const handlerUpdateNumbers = (number) => {
    setUserNumbers([...userNumbers, number])
  }

  return (
    <div className={styles.container}>
      <h2> Tus números son:      </h2>
      {userNumbers.map((number) => (
        <span key={number}> {number} -</span>
      ))}
      <Numbers numbers={300} onChange={handlerUpdateNumbers} userNumbers={userNumbers} />
    </div>
  )
}
