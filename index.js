const morse = require(__dirname + '/src/toMorseCode');

async function main() {
  console.log(await morse.priToMorseCode());
  /*
  .---- ----. ..--- .-.-.- .---- -.... ---.. .-.-.- .---- .-.-.- .---- ----- .----
  */

  console.log(await morse.priToMorseCode(true));
  /*
  .- -. ..- .-.-.- .- -.... -.. .-.-.- .- .-.-.- .- - .-
  */

  console.log(await morse.priToMorseCode(true, true));
  /*
  [
    '.-',  '-.',
    '..-', '.-.-.-',
    '.-',  '-....',
    '-..', '.-.-.-',
    '.-',  '.-.-.-',
    '.-',  '-',
    '.-'
  ]
  */

  console.log(await morse.priToMorseCode(false, true));
  /*
  [
    '.----', '----.',
    '..---', '.-.-.-',
    '.----', '-....',
    '---..', '.-.-.-',
    '.----', '.-.-.-',
    '.----', '-----',
    '.----'
  ]
  */

  console.log(await morse.pubToMorseCode());
  /*
  ..--- ----- ...-- .-.-.- ..--- ....- ----. .-.-.- .---- ..--- --... .-.-.- ....- ...--
  */

  console.log(await morse.pubToMorseCode(true));
  /*
  ..- - ...- .-.-.- ..- ....- -. .-.-.- .- ..- -... .-.-.- ....- ...-
  */

  console.log(await morse.pubToMorseCode(true, true));
  /*
  [
    '..-',    '-',      '...-',
    '.-.-.-', '..-',    '....-',
    '-.',     '.-.-.-', '.-',
    '....-',  '...-'
  ]
  */

  console.log(await morse.pubToMorseCode(false, true));
  /*
  [
    '..---', '-----',
    '...--', '.-.-.-',
    '..---', '....-',
    '----.', '.-.-.-',
    '.----', '..---',
    '--...', '.-.-.-',
    '....-', '...--'
  ]
  */
}

main();
