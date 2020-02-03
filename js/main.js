let enc_key = document.getElementById("enc_key");
let enc_original_text = document.getElementById("enc_original_text");
let enc_cipher_text = document.getElementById("enc_cipher_text");
let dec_key = document.getElementById("dec_key");
let dec_cipher_text = document.getElementById("dec_cipher_text");
let dec_original_text = document.getElementById("dec_original_text");

const to_cipher = () => {
  let key = enc_key.value;
  let plain = enc_original_text.value;
  let cipher_text = encrypt(plain, key);
  enc_cipher_text.textContent = cipher_text;
};

const to_plain = () => {
  let key = dec_key.value;
  let cipher = dec_cipher_text.value;
  let plain = encrypt(cipher, key);
  dec_original_text.textContent = plain;
};

const to_asc = text => {
  let asc = [];
  for (let i = 0; i < text.length; i++) {
    asc.push(text.charCodeAt(i));
  }
  return asc;
};

const get_xor = (plain_asc, key_asc) => {
  let xor = [];
  for (let i = 0; i < key_asc.length; i++) {
    const element = key_asc[i];
    xor.push(element ^ plain_asc[i]);
  }
  console.log("out xor", xor);
  return xor;
};

encrypt = (plain, key) => {
  const plain_asc = to_asc(plain);
  const key_asc = to_asc(key);
  const xor = get_xor(plain_asc, key_asc);
  console.log("xor from encrypt", xor);
  let cipher = "";
  for (let i = 0; i < xor.length; i++) {
    const element = xor[i];
    let text = String.fromCharCode(element);
    console.log(String.fromCharCode(element));
    cipher = cipher.concat(text);
  }
  console.log("cipher", cipher);
  return cipher;
};
