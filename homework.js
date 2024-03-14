function validateNumber(str) {
  const newStr = str.split("-").join("").split("+").join("");
  let num1 = newStr.slice(0, 2);
  let num2 = newStr.slice(0, 3);
  if (num1 === "07" && newStr.length === 11) {
    return "In with a chance";
  }
  if (num2 === "447" && newStr.length === 12) {
    return "In with a chance";
  }
  return "Plenty more fish in the sea";
}
console.log(validateNumber("0745-487-61-20"));
