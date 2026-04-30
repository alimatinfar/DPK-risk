import onInputJustEnglishLetters from "./onInputJustEnglishLetters.ts";

function onInputJustUpperCaseEnglish(e: any) {
  e.target.value = onInputJustEnglishLetters(e).target.value.toUpperCase();
}

export default onInputJustUpperCaseEnglish