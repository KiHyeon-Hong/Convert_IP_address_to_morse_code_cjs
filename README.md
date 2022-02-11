## Convert_IP_address_to_morse_code_cjs

### 개요

- 사용자의 공인 IP 주소와 사설 IP 주소를 모스 부호로 변경하여 반환한다.
- CommonJS 형식이다.

### Install

```bash
git clone https://github.com/KiHyeon-Hong/Convert_IP_address_to_morse_code_cjs.git
cd Convert_IP_address_to_morse_code_cjs
npm i
```

### API

#### await priToMorseCode(short, arr)

- short: 모스 부호 간략 기호 여부 (true, false)
- arr: 배열 형식 반환 여부 (true, false)

```javascript
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
}

main();
```

#### await pubToMorseCode(short, arr)

- short: 모스 부호 간략 기호 여부 (true, false)
- arr: 배열 형식 반환 여부 (true, false)

```javascript
const morse = require(__dirname + '/src/toMorseCode');

async function main() {
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
```
