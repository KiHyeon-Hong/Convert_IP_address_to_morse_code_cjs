const request = require('request');
const ip = require('ip');

async function getPublicIP() {
  return await new Promise((resolve) => {
    request.get({ url: 'https://api.ipify.org' }, function (_1, _2, body) {
      return resolve(body);
    });
  });
}

async function getPrivateIP() {
  return ip.address();
}

function toShortMorse(ip) {
  const morse = {
    0: '-',
    1: '.-',
    2: '..-',
    3: '...-',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '-...',
    8: '-..',
    9: '-.',
    '.': '.-.-.-',
  };

  return ip.split('').map((v) => {
    return morse[v];
  });
}

function toLongMorse(ip) {
  const morse = {
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    '.': '.-.-.-',
  };

  return ip.split('').map((v) => {
    return morse[v];
  });
}

module.exports.pubToMorseCode = async function pubToMorseCode(short = false, arr = false) {
  const ip = await getPublicIP();
  const ipStr = short ? toShortMorse(ip) : toLongMorse(ip);
  return arr ? ipStr : ipStr.join(' ');
};

module.exports.priToMorseCode = async function priToMorseCode(short = false, arr = false) {
  const ip = await getPrivateIP();
  const ipStr = short ? toShortMorse(ip) : toLongMorse(ip);
  return arr ? ipStr : ipStr.join(' ');
};
