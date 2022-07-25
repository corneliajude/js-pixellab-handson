for (var i = 5; i <= 100; i++) {
  console.log(i);

  if (i % 7 !== 0) {
    continue;
  }

  console.log('Acest numar este multiplu de 7.');
}
