function firstChar(text) {
  // your code here
  text = text.trim();

  return text.length ? text[0] : text;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
