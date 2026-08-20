

function checkFormHasAtLeastOneValue(formData: object) {
  return Object.values(formData).some(value => value)
}

export default checkFormHasAtLeastOneValue;