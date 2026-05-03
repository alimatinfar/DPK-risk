
function getBodyDataNumberField(value: any) {
  return value == null || value === '' ? null : Number(value)
}

export default getBodyDataNumberField;