function padWithZeros(value: string | number, targetLength: number): string {
  return String(value).padStart(targetLength, '0');
}

export default padWithZeros
