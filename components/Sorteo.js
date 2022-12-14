import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Numbers from '../services/numbers'
import Random from '../services/randomNumbers'

export default function Sorteo({ lottoData }) {
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
        <div className={styles.grid}>
          <div>
             <Image
              className='image'
              src={lottoData.image}
              alt="Picture of the author"
              width={300}
              height={300}
            />
          </div>
          <div>
            <h2>{lottoData.description}</h2>
            Para el día: {lottoData.date} { ' - ' }
            Organizada por: {lottoData.contact}
          </div>
        </div>
        <div>
          <div>
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
          </div>
        </div>

        <Numbers
          numbers={maxNumbers}
          onChange={handlerUpdateNumbers}
          userNumbers={userNumbers}
        />
      </div>
    </div>

  )
}
