export const vlsm = (numberHost: number): number => {
  let prefix: number = 0;
  if (numberHost === 2 ** 2 - 2) {
    prefix = 30;
  } else if (numberHost > 2 ** 2 - 2 && numberHost <= 2 ** 3 - 2) {
    prefix = 29;
  } else if (numberHost > 2 ** 3 - 2 && numberHost <= 2 ** 4 - 2) {
    prefix = 28;
  } else if (numberHost > 2 ** 4 - 2 && numberHost <= 2 ** 5 - 2) {
    prefix = 27;
  } else if (numberHost > 2 ** 5 - 2 && numberHost <= 2 ** 6 - 2) {
    prefix = 26;
  } else if (numberHost > 2 ** 6 - 2 && numberHost <= 2 ** 7 - 2) {
    prefix = 25;
  } else if (numberHost > 2 ** 7 - 2 && numberHost <= 2 ** 8 - 2) {
    prefix = 24;
  } else if (numberHost > 2 ** 8 - 2 && numberHost <= 2 ** 9 - 2) {
    prefix = 23;
  } else if (numberHost > 2 ** 9 - 2 && numberHost <= 2 ** 10 - 2) {
    prefix = 22;
  } else if (numberHost > 2 ** 10 - 2 && numberHost <= 2 ** 11 - 2) {
    prefix = 21;
  } else if (numberHost > 2 ** 11 - 2 && numberHost <= 2 ** 12 - 2) {
    prefix = 20;
  } else if (numberHost > 2 ** 12 - 2 && numberHost <= 2 ** 13 - 2) {
    prefix = 19;
  } else if (numberHost > 2 ** 13 - 2 && numberHost <= 2 ** 14 - 2) {
    prefix = 18;
  } else if (numberHost > 2 ** 14 - 2 && numberHost <= 2 ** 15 - 2) {
    prefix = 17;
  } else if (numberHost > 2 ** 15 - 2 && numberHost <= 2 ** 16 - 2) {
    prefix = 16;
  } else if (numberHost > 2 ** 16 - 2 && numberHost <= 2 ** 17 - 2) {
    prefix = 15;
  } else if (numberHost > 2 ** 17 - 2 && numberHost <= 2 ** 18 - 2) {
    prefix = 14;
  } else if (numberHost > 2 ** 18 - 2 && numberHost <= 2 ** 19 - 2) {
    prefix = 13;
  } else if (numberHost > 2 ** 19 - 2 && numberHost <= 2 ** 20 - 2) {
    prefix = 12;
  } else if (numberHost > 2 ** 20 - 2 && numberHost <= 2 ** 21 - 2) {
    prefix = 11;
  } else if (numberHost > 2 ** 21 - 2 && numberHost <= 2 ** 22 - 2) {
    prefix = 10;
  } else if (numberHost > 2 ** 22 - 2 && numberHost <= 2 ** 23 - 2) {
    prefix = 9;
  } else if (numberHost > 2 ** 23 - 2 && numberHost <= 2 ** 24 - 2) {
    prefix = 8;
  } else if (numberHost > 2 ** 24 - 2 && numberHost <= 2 ** 25 - 2) {
    prefix = 7;
  } else if (numberHost > 2 ** 25 - 2 && numberHost <= 2 ** 26 - 2) {
    prefix = 6;
  } else if (numberHost > 2 ** 26 - 2 && numberHost <= 2 ** 27 - 2) {
    prefix = 5;
  } else if (numberHost > 2 ** 27 - 2 && numberHost <= 2 ** 28 - 2) {
    prefix = 4;
  } else if (numberHost > 2 ** 28 - 2 && numberHost <= 2 ** 29 - 2) {
    prefix = 3;
  } else if (numberHost > 2 ** 29 - 2 && numberHost <= 2 ** 30 - 2) {
    prefix = 2;
  } else if (numberHost > 2 ** 30 - 2 && numberHost <= 2 ** 31 - 2) {
    prefix = 1;
  } else if (numberHost > 2 ** 31 - 2 && numberHost <= 2 ** 32 - 2) {
    prefix = 0;
  } else {
    prefix = 31;
  }
  return prefix;
};
