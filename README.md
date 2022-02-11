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

### 사용 예시

- Raspberry Pi는 모니터가 없으면, SSH 접속을 위한 IP를 획득하기 어렵다.
- 이를 해결하기 위해 Raspberry Pi가 부팅한 다음 사설 IP를 모스부호로 반환해주는 코드를 작성한다.
- 해당 소스 코드는 gpio 29번 핀 (물리핀 40)에 연결되어 있는 센서를 통해 모스 부호가 반환된다.

```javascript
const gpio = require('node-wiring-pi');
const morse = require(__dirname + '/src/toMorseCode');

const MORSE = 29;

gpio.setup('wpi');
gpio.pinMode(MORSE, gpio.OUTPUT);

const stop100ms = () => {
  gpio.digitalWrite(MORSE, 0);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};

const stop500ms = () => {
  gpio.digitalWrite(MORSE, 0);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

const short = () => {
  gpio.digitalWrite(MORSE, 1);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });
};

const long = () => {
  gpio.digitalWrite(MORSE, 1);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

async function main() {
  let priIP = await morse.priToMorseCode();
  priIP = priIP.split('');

  for (let i = 0; i < priIP.length; i++) {
    if (priIP[i] === '.') {
      await short();
      await stop100ms();
    } else if (priIP[i] === '-') {
      await long();
      await stop100ms();
    } else {
      await stop500ms();
    }
  }
}

main();
```

- '.': 100ms 1 신호를 주며, 100ms 0 신호를 준다.
- '-': 500ms 1 신호를 주며, 100ms 0 신호를 준다.
- ' ': 각 모스 부호 사이의 간격은 500ms이며, 500ms 동안 0 신호를 준다.
