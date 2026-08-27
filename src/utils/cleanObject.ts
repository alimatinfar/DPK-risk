function cleanObject(object: object) {
  return Object.fromEntries(
    Object.entries(object).filter(([title, value]) => value != null && value !== '')
  )
}

export default cleanObject;
