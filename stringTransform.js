function transformString(input) {
  const length = input.length;

  //If length is divisible by 3, reverse the string
  if (length % 3 === 0) {
    input = reverseString(input);
  }

  //If length is divisible by 5, replace characters with ASCII codes
  if (length % 5 === 0) {
    input = asciiReplace(input);
  }

  //If length is divisible by both 3 and 5, perform both operations
  if (length % 15 === 0) {
    input = asciiReplace(reverseString(input));
  }

  return input;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function asciiReplace(str) {
  return str
    .split("")
    .map((char) => char.charCodeAt(0))
    .join(" ");
}

// Examples
console.log(transformString("expertise"));
console.log(transformString("Fault"));
console.log(transformString("Chocolate with Cookie"));
