import padWithZeros from "./padWithZeros.ts";

function displayNaturalNationalId(value: string | number | undefined | null) {
  if (!value) return ''

  return padWithZeros(value, 10)
}

export default displayNaturalNationalId;
