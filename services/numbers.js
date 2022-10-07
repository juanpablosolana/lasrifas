import styles from '../styles/Home.module.css'

export default function Numbers({ numbers, onChange = Function.prototype, userNumbers }) {
  if (numbers === NaN) {
    return null
  }
  const numbersArray = Array.from(Array(numbers).keys())

  return (
    <div>
      <h1>Numeros de la suerte disponibles: </h1>
      {
        numbersArray.map((number) => (
          <button
            key={number}
            className={
              userNumbers.includes(number + 1)
                ? styles.buttonBlack
                : styles.button
            }
            onClick={() => onChange(number + 1)}
          >
            {number + 1}
          </button>
        ))}
    </div>
  )
}
