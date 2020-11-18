function reverseStr(str) {
  //check input of string
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Not valid";
  }
  const revArray = [];
  // looping from end instead of the [0] index.
  for (let i = 0; i < str.length; i--) {
    revArray.push(str[i]);
  }
  return revArray.join("");
}
