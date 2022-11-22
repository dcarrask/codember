console.log(`\n`);

const MIN = 11098;
const MAX = 98123;

let output = [];

for (let i = MIN; i <= MAX; i++) {

  const appearances = String(i).split('5').length - 1;

  if (appearances > 1) if (String([...String(i)].sort().join('')) === String(i)) output.push(i);

}

console.log(`submit ${output.length}-${output[55]}`);

console.log(`\n`);
