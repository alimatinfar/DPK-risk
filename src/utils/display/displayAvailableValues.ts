

function displayAvailableValues(...parts: (number | string)[]) {
  return parts
    .map(part => part || '')
    .join(' ')
    .trim();
}

export default displayAvailableValues;
