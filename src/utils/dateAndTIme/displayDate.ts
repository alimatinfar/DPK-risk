
function displayDate(value: string | number | undefined) {
  const valueString = String(value)
  if (!value) return ''
  const year = valueString.slice(0, 4)
  const month = valueString.slice(4, 6)
  const day = valueString.slice(6, 8)
  return `${year}${month ? `/${month}` : ''}${day ? `/${day}` : ''}`
}

export default displayDate;
