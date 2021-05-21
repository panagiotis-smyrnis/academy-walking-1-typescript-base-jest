export const numberToRomanString = (n: number): string => {
  let romanSt = "";

  for (let i = 1; i <= n / 1000; i++) {
    romanSt += "M";
  }
  let nu = n % 1000;

  for (let i = 1; i <= nu / 900; i++) {
    romanSt += "CM";
  }
  nu = nu % 900;

  for (let i = 1; i <= nu / 500; i++) {
    romanSt += "D";
  }
  nu = nu % 500;

  for (let i = 1; i <= nu / 400; i++) {
    romanSt += "CD";
  }
  nu = nu % 400;

  for (let i = 1; i <= nu / 100; i++) {
    romanSt += "C";
  }
  nu = nu % 100;

  for (let i = 1; i <= nu / 40; i++) {
    romanSt += "XL";
  }

  nu = nu % 40;
  for (let i = 1; i <= nu / 10; i++) {
    romanSt += "X";
  }

  return romanSt;
};
