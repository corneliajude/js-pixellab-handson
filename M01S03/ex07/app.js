var petName = 'Puff';

console.log(`
    Dragos este instructor de programare. Dragos studiaza JavaScript de la 17 ani.
    Cand Dragos a absolvit facultatea si-a facut licenta in JavaScript.
    Dragos are si un master in tehnologii internet.
    Dragos este instructor Pixellab si preda JavaScript acolo.
`);

person = {
  firstName: 'Cornelia',
  lastName: 'Jude',
  email: 'email@email.com',
  birthYear: 1997,
  pets: [
    { name: 'Puff', species: 'Amur Leopard', age: '4' },
    { name: 'Pow', species: 'Black Rhino', age: '8' },
    { name: 'Pam', species: 'Cross River Gorilla', age: '5' },
  ],
  zipCode: '3557432',
};

console.warn(`Afiseaza propozitia: “Numele meu este: xxx yyy si am x animale.”.
Nu uita de proprietatea length a arrayului pets.`);

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  'Afiseaza propozitia:“Unul din cele x animale ale mele este species si are age ani.”',
);

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(`Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.
`);

console.log((2022 - person.pets[2].age).toString());

console.warn(`Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.
`);

console.log((2022 - person.birthYear - person.pets[0].age).toString());

console.warn(`Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
`);

console.warn(`Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.
`);

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    `${petName} este o diferenta de ${
      2022 - person.birthYear - person.pets[0].age
    } ani.`,
);
