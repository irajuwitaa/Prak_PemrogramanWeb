const display = document.getElementById('display');

function appendNumber(number) {
  display.value += number;
}

// Menambahkan operator ke layar
function appendOperator(operator) {
  display.value += operator;
}

// Menghitung hasil
function calculate() {
  try {
    display.value = eval(display.value.replace('^', '**'));
  } catch (error) {
    display.value = "Error";
  }
}

// Menghapus semua input di layar
function clearDisplay() {
  display.value = '';
}
