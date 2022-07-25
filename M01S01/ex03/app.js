var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputHeight = document.getElementById('height');
var elementResult = document.getElementById('result');
form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (e) {
    var length = inputLength.value || 0;
    var width = inputWidth.value || 0;
    var height = inputHeight.value || 0;

    result = length * width * height;

    elementResult.innerText = result;

    e.preventDefault();
  },
  false,
);
