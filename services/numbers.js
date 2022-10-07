
export default function Numbers({ numbers, onChange = Function.prototype }) {
  if (numbers === NaN) {
    return null
  }
  const numbersArray = Array.from(Array(numbers).keys())

  return (
    <div>
      <h1>Numeros de la suerte disponibles: </h1>
      {numbersArray.map((number) => (
        <button key={number} onClick={() => onChange(number + 1)}>{number + 1} </button>
      ))}
    </div>
  )
}
