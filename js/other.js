let enc_key = document.getElementById("enc_key");
let enc_original_text = document.getElementById("enc_original_text");
let enc_cipher_text = document.getElementById("enc_cipher_text");
let dec_key = document.getElementById("dec_key");
let dec_cipher_text = document.getElementById("dec_cipher_text");
let dec_original_text = document.getElementById("dec_original_text");
const VALUE = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 14,
  P: 15,
  Q: 16,
  R: 17,
  S: 18,
  T: 19,
  U: 20,
  V: 21,
  W: 22,
  X: 23,
  Y: 24,
  Z: 25
};

const to_cipher = () => {
  let key = enc_key.value.toUpperCase();
  let plain = enc_original_text.value.toUpperCase();
  let key_val = [];
  let plain_val = [];

  for (const ch in key) {
    if (key.hasOwnProperty(ch)) {
      const element = key[ch];
      key_val.push(VALUE[element]);
    }
  }
  for (const ch in plain) {
    if (plain.hasOwnProperty(ch)) {
      const element = plain[ch];
      plain_val.push(VALUE[element]);
    }
  }

  var sum = key_val.map((a, i) => {
    let temp = a + plain_val[i];
    let result;
    if (temp > 26) {
      result = temp - 26;
    } else {
      result = temp;
    }
    return result;
  });

  let cipher = "";
  for (let i = 0; i < sum.length; i++) {
    const value = sum[i];
    const some = Object.keys(VALUE).find(key => VALUE[key] === value);
    cipher = cipher + some;
  }
  enc_cipher_text.textContent = cipher;
};

const to_plain = () => {
  let key = dec_key.value.toUpperCase();
  let cipher = dec_cipher_text.value.toUpperCase();
  let key_val = [];
  let cipher_val = [];

  for (const ch in key) {
    if (key.hasOwnProperty(ch)) {
      const element = key[ch];
      key_val.push(VALUE[element]);
    }
  }
  for (const ch in cipher) {
    if (cipher.hasOwnProperty(ch)) {
      const element = cipher[ch];
      cipher_val.push(VALUE[element]);
    }
  }
  console.log("cipher", cipher_val);
  console.log("key", key_val);
  let subtract = [];
  for (var i = 0; i < key_val.length; i++) {
    let temp = [];
    temp[i] = cipher_val[i] - key_val[i];
    console.log("teeemp", temp[i]);
    if (temp[i] < 0) {
      console.log("negaticeeeeeee");
      console.log("howww", temp[i]);
      console.log("tyyypeeee", typeof temp[i]);
      subtract[i] = 26 + temp[i];
      console.log("what nnn", subtract[i]);
    } else {
      subtract[i] = temp[i];
    }
  }

  console.log("subtract", subtract);

  let original = "";
  for (let i = 0; i < subtract.length; i++) {
    const value = subtract[i];
    const some = Object.keys(VALUE).find(key => VALUE[key] === value);
    original = original + some;
  }
  dec_original_text.textContent = original;
};
