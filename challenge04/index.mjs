console.log(`\n`);

const MIN = 11098;
const MAX = 98123;

let output = [];

for (let i = MIN; i <= MAX; i = i+1) {

  const appearances = String(i).split('5').length - 1;

  if (appearances > 1) {

    const ordered = [...String(i)].sort().join('')

    if (String(ordered) === String(i)) {
      output.push({
        i: String(i),
        fives: String(i).split('5').length - 1
      });
    }

  }

}

console.log(`submit ${output.length}-${output[55].i}`);

console.log(`\n`);
