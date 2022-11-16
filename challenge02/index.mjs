
const testEncryption = (input) => {

  let message = input.words;

  console.log(`  test: '${message}'\n`);

  let output = '';

  message = message.split(' ');

  message.map(word => {

    for (let j = 0; j < word.length; j++) {
      output += word[j].charCodeAt(0);
    }

    output += ' ';

  });

  output = output.trim();

  if (input.encrypted === output) {
    console.log(`        ✅ '${output}' IT A MATCH`);
  } else {
    console.error(`        ⛔ '${output}' IS NOT A MATCH WITH '${input.encrypted}'`);
  }

  console.log(`\n\n`);

}


const decypherMessage = (encrypted) => {

  encrypted = encrypted.split(' ');

  let output = '';

  encrypted.map(word => {

    word = word.replace(/97/g, '097').replace(/98/g, '098').replace(/99/g, '099');

    let input = word.match(/.{1,3}/g);

    input.map(number => output += String.fromCharCode(number));

    output += ' ';

  });

  output = output.trim();

  console.log(`         ▶️  submit ${output}\n`);

  return output;

}



// TEST THE DICTIONARY
const testDictionary = () => {

  let dictionary = [
    {
      words: 'midu',
      encrypted: '109105100117'
    },
    {
      words: 'codember',
      encrypted: '9911110010110998101114'
    },
    {
      words: 'codember midu',
      encrypted: '9911110010110s998101114 109105100117'
    },
    {
      words: 'play tetris',
      encrypted: '11210897121 116101116114105115'
    }
  ];

  // console.log(`#############################################################################`);
  console.log(`### 1.- LET'S TEST THE DICTIONARY ##############################################\n`);

  dictionary.map(input => {
    testEncryption(input);
  });

}



// DECYPHER
const decypher = () => {

  // console.log(`#############################################################################`);
  console.log(`### 2.- LET'S DECYPHER #########################################################\n`);

  let input = {
    words: null,
    encrypted: '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'
  };

  console.log(`  input: '${input.encrypted}'\n`);

  input.words = decypherMessage(input.encrypted);

  return input;

}



const validate = (input) => {

  // console.log(`#############################################################################`);
  console.log(`### 3.- LET'S VALIDATE #########################################################\n`);

  let result = testEncryption(input);

}




console.log(`\n`);

testDictionary();

console.log(`\n\n`);

let decypherResult = decypher();

console.log(`\n\n\n`);

validate(decypherResult);

console.log(`\n`);