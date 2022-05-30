const randomize = (passwordLength, isUpperCase, isNumber, isSymbol ) => {
    const charLowerCase = "abcdefghijklmnopqrstuvwxyz";
    const charUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charNumbers = "0123456789";
    const charSymbols = "!@#$%^&*_-+=";
    let selectedString = charLowerCase;
    let generatedPassword = "";

    if(isUpperCase) { selectedString += charUpperCase}
    if(isNumber) { selectedString += charNumbers}
    if(isSymbol) { selectedString += charSymbols}

    for (let i = 0; i < passwordLength; i++) {
        generatedPassword += selectedString.charAt(Math.floor(Math.random() * selectedString.length));
      }
    
    return generatedPassword;
}

export default randomize