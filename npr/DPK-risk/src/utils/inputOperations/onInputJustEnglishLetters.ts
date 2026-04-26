
function onInputJustEnglishLetters(e:any) {
  const value = e.target.value;

  e.target.value = value.replace(/[^a-zA-Z]/g, '');
  return e
}

export default onInputJustEnglishLetters;