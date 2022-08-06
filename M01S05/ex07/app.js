const dateBuilder = [
  function () {
    return '2022';
  },
  function () {
    return 'August';
  },
  () => {
    return '3';
  },
];

dateBuilder[3] = function () {
  return 'Miercuri';
};

console.warn(`Folosind arrayul dateBuilder. Afiseaza luna curenta.`);

console.log(`Suntem in anul ${dateBuilder[0]}.`);
