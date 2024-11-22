const inputNumber = document.getElementById('number');
const buttonConvert = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertArr = [
  {
    arabic: 1000,
    roman: 'M'
  },
  {
    arabic: 900,
    roman: 'CM'
  },
  {
    arabic: 500,
    roman: 'D',
  },
  {
    arabic: 400,
    roman: 'CD',
  },
  {
    arabic: 100,
    roman: 'C',
  },
  {
    arabic: 90,
    roman: 'XC',
  },
  {
    arabic: 50,
    roman: 'L',
  },
  {
    arabic: 40,
    roman: 'XL',
  },
  {
    arabic: 10,
    roman: 'X',
  },
  {
    arabic: 9,
    roman: 'IX',
  },
  {
    arabic: 5,
    roman: 'V',
  },
  {
    arabic: 4,
    roman: 'IV',
  },
  {
    arabic: 1,
    roman: 'I',
  }
];

buttonConvert.addEventListener("click", checkThenConvert);

inputNumber.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkThenConvert();
  }
});

function checkThenConvert() {
  if (!inputNumber.value) {
    showError("Please enter a valid number");
    return;
  } 
  
  let numberInt = parseInt(inputNumber.value);
  if (numberInt <= 0) {
    showError("Please enter a number greater than or equal to 1");
    return;
  }

  if (numberInt > 3999) {
    showError("Please enter a number less than or equal to 3999");
    return;
  } 

  showMessage(doConvert(numberInt));
};

function showError(message) {
  output.classList.remove('outputNomal');
  output.classList.add('outputError');
  output.innerText = message;
  output.style.display = 'flex';
}

function showMessage(message) {
  output.classList.remove('outputError');
  output.classList.add('outputNomal');
  output.innerText = message;
  output.style.display = 'flex';
}

const doConvert = (numberInt) => {
  for (const {arabic, roman} of convertArr) {
    if (numberInt > arabic) {
      return roman + doConvert(numberInt - arabic);
    } else if (numberInt == arabic) {
      return roman;
    }
  }
  return '';
};