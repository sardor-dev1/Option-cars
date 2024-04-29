export const daraja = (son) => {
  return son ** 2;
};

export const kattaHarf = (text) => {
  return text
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const sonlarteskari = (number) => {
  let res = [];
  for (let i = number; i > 0; i--) {
    res.push(i);
  }
  return res;
};

export const asrgaAylantir = (year) => {
  return Math.ceil(year / 100);
};

export const OrtachaQiy = (nums) => {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res += nums[i] / nums.length;
  }
  return res;
};

export const sozTeskari = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
};

export const ikkiTadan = (str) => {
  let res = "";
  for (let txt of str) {
    res += txt + txt;
  }
  return res;
};

export const BirinchiHarf = (name) => {
  let res = "";
  res = name
    .split(" ")
    .map((txt) => txt[0])
    .join(".")
    .toUpperCase();
  return res;
};

export const arrayYigindi = (numbers) => {
  if (numbers.length == 0) {
    return 0;
  } else {
    return numbers.reduce((num1, num2) => num1 + num2);
  }
};

export const manfiyMusbat = (number) => {
  if (number > 0) {
    return -number;
  } else {
    return -number;
  }
};
