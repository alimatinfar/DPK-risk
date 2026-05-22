import padWithZeros from "./padWithZeros.ts";


function displayLegalNationalId(value: string | number | undefined | null) {
  if (!value) return ''

  return padWithZeros(value, 11)
}

export default displayLegalNationalId;
