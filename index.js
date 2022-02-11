const morse = require(__dirname + '/src/toMorseCode');

async function main() {
  console.log(await morse.priToMorseCode());
}

main();
