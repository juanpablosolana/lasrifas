export default function Random(maxNumber, ignoredNumbers) {
  const random = Math.floor(Math.random() * maxNumber) + 1
  if (ignoredNumbers.includes(random)) {
    return Random(maxNumber, ignoredNumbers)
  }
  return random
}