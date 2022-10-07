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
      <Numbers numbers={400} onChange={handlerUpdateNumbers} userNumbers={userNumbers} />
      <h2> Tus números son:      </h2>
      {userNumbers.map((number) => (
        <span key={number}> {number} -</span>
      ))}

    </div>
  )
}
