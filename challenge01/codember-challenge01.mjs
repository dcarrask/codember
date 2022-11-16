// https://codember.dev/
// Challenge01

import { promises as fs } from 'fs';

const run = async () => {

  let data = await fs.readFile('./users.txt', 'utf8');

  let result = data.replace(/\n\s*\n/g, '*****').replace(/\n/g, " ").split('*****');

  let output = result.filter(user => {
    return (
      user.indexOf('fll:') != -1 &&
      user.indexOf('eme:') != -1 &&
      user.indexOf('usr:') != -1 &&
      user.indexOf('psw:') != -1 &&
      user.indexOf('age:') != -1 &&
      user.indexOf('loc:') != -1);
  });

  let lastUser = output[output.length-1];

  let userOutput = lastUser.match(/(\usr:\S+\b)/ig)[0].split(':')[1];

  console.log(`submit ${output.length}${userOutput}`);

}

run();