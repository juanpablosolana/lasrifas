import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Numbers from '../services/numbers'
import Random from '../services/randomNumbers'

export default function Sorteo({ lottoData }) {
  console.log(lottoData)
  const maxNumbers = lottoData.numbers
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
          {lottoData.name}
        </h1>
        <p className={styles.description}>
          {lottoData.description}
        </p>
        <p className={styles.description}>
          {lottoData.date}
        </p>
        <p className={styles.description}>
          {lottoData.contact}
        </p>
        <Image
          src={lottoData.image}
          alt="Picture of the author"
          width={500}
          height={500}
        />
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
