
function displayDate(value: string | number | undefined) {
  const valueString = String(value)
  if (!value) return ''
  return `${valueString.slice(0, 4)}/${valueString.slice(4, 6)}/${valueString.slice(6, 8)}`
}

export default displayDate;
