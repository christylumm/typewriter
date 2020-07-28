let sentence = "hello there from lighthouse labs";

const typeWriter = function(str) {
  str += "\n"
  let timeout = 50;
  for (let char of str) {
    setTimeout(() => {
      //char = sentence.split("");
      process.stdout.write(char);
    }, timeout+= 50)
  }
}

typeWriter(sentence);