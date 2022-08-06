var i = 0;

while (i < 100) {
  if (i > 50) {
    i++; // <- important

    break;
  }
  console.log(i);

  i++;
}
