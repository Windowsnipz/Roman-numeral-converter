const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const resultText = document.getElementById('result-text');

convertBtn.addEventListener('click', runInput);

function runInput() {
    const num = parseInt(numberInput.value);
    if (!numberInput.value || parseFloat(numberInput.value) !== Math.floor(numberInput.value)) {
        resultText.textContent = "Please enter a valid number"; /* Checks for empty and floating point inputs */
        return;
    } else if (num < 1) {
        resultText.textContent = "Please enter a number greater than or equal to 1";
    } else if (num > 3999) {
        resultText.textContent = "Please enter a number less than or equal to 3999";
    } else {
        resultText.textContent = intToRoman(num);
    }
}

function intToRoman(int) {
    const result = []
    const key = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
      ];

    key.forEach((arr) => {
        while (int >= arr[1]) {
            result.push(arr[0]);
            int -= arr[1];
        }
    })

    return result.join('');
}
