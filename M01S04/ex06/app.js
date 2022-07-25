var person = {
  name: 'Cornelia',
  surname: 'Jude',
  age: 25,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larrynson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.`,
);

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];
  if (i % 2 === 0) {
    console.log(skill);
  }
}

console.warn(`In mod similar, afiseaza skillurile care NU incep cu j.`);

for (var i = 0; i < person.skills.length; i++) {
  var skill = person.skills[i];

  if (skill[0] !== 'j') {
    console.log(skill);
  }
}

console.warn(
  `Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."`,
);

var message = 'Prietenii mei se numesc: ';
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  // V1
  message = message + friend.name + ' ' + friend.surname + punctuation;

  console.log(message);
}

console.warn(
  `Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends,
  doar daca varsta este mai mare sau egala cu 30 de ani.`,
);

var sumAge = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];

  if (friend.age >= 30) {
    sumAge = sumAge + friend.age;
  }
}
console.log(sumAge.toString());

console.warn(
  ` Folosind un for, afiseaza suma anilor de nastere a persoanelor.`,
);

var currentYear = 2022;
var sumBirthYear = 0;
for (var i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var BirthYear = currentYear - friend.age;
  console.log(BirthYear.toString());
  sumBirthYear = sumBirthYear + BirthYear;
}
console.log(sumBirthYear.toString());

console.warn(` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends
doar daca aceasta este mai mare de 2 ani.
`);

for (i = 0; i <= person.friends.length; i++) {
  var friend = person.friends[i];
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }
}
