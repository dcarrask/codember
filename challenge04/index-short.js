output = [];

for (i = 11098; i <= 98123; i++)

  if ((String(i).split('5').length - 1 > 1) &&
      (String([...String(i)].sort().join('')) === String(i)))
    output.push(i);

console.log(`\nsubmit ${output.length}-${output[55]}\n`);
