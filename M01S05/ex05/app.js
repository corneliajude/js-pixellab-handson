const person = {
  getName: function () {
    return 'Cornelia Jude';
  },

  getAge: function () {
    return 25;
  },
};

console.warn(`Afiseaza primul nume al persoanei
folosind metoda getName()
`);

console.log(person.getName().split(' ')[0]);

console.warn(`Afiseaza anul de nastere al persoanei
folosind metoda getAge() si anul curent.
`);

const currentYear = new Date().getFullYear();

console.log(currentYear - person.getAge());

console.warn(`Afiseaza ultimele doua cifre al anului de nastere
al persoanei, folosind anul curent si metoda getAge(). (Exemplu: ‘87).
`);

birthYear = currentYear - person.getAge();

console.log(`${birthYear.toString().slice(-2)}`);

console.warn(`Afiseaza propozita: “Ma numesc xxx si am yy ani!`);

console.log(`Ma numesc ${person.getName()} si am ${person.getAge()} ani.`);
