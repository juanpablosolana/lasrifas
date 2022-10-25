import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Numbers from '../services/numbers'
import Random from '../services/randomNumbers'

export default function Home() {
  const maxNumbers = 300
  const [userNumbers, setUserNumbers] = useState([])

  const handlerUpdateNumbers = (number) => {
    if (userNumbers.includes(number)) {
      setUserNumbers(userNumbers.filter((userNumber) => userNumber !== number))
    } else {
      setUserNumbers([...userNumbers, number])
    }
  }
  const handlerRandomNumbers = () => {
    setUserNumbers([])
    const randomNumbers = Random(maxNumbers, userNumbers)
    setUserNumbers([...userNumbers, randomNumbers])
  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          Números de la suerte
        </h1>
        {
          userNumbers.length !== maxNumbers
            ? <button onClick={handlerRandomNumbers}>
              Voy a tener suerte
            </button>
            : null
        }

        <h2> Tus números son: </h2>
        {
          userNumbers.map(
            (number) => (
              <span key={number}>
                {number} -
              </span>
            )
          )
        }

        <Numbers
          numbers={maxNumbers}
          onChange={handlerUpdateNumbers}
          userNumbers={userNumbers}
        />
      </div>
    </div>

  )
}
