let selectBrand = document.forms.form.elements.selectBrand.value;
let selectModel = document.forms.form.elements.selectModel.value;
let checkBoxPetrol = document.forms.form.elements.petrol;
let checkBoxDisel = document.forms.form.elements.disel;
let checkBoxGas = document.forms.form.elements.gas;
let checkBoxElectro = document.forms.form.elements.electro;
let engine = document.querySelector(".engine__input");
let newCar = document.forms.form.elements.new;
let notNewCar = document.forms.form.elements.notNew;
let oneTwo = document.forms.form.elements.oneTwo;
let three = document.forms.form.elements.three;



const button = document.getElementById('button');
const check = document.getElementById('mistakes');
const sum = document.getElementById('sum');

notNewCar.addEventListener('click', function showCount() {
    document.querySelector('.count').style.display = 'flex';
})

newCar.addEventListener('click', function hideCount() {
    document.querySelector('.count').style.display = 'none';
})

let errors = []
let engineValidity = engine.validity;
let max = engine.max;
let min = engine.min;

function checkValidity(engine) {

    if (engineValidity.rangeOverflow) {
        errors.push('Максимальное значение не может быть больше, чем ' + max);
    }

    if (engineValidity.rangeUnderflow) {
        errors.push('Минимальное значение не может быть меньше, чем ' + min);
    }

    if (engineValidity.valid) {
        errors.push('Строка не заполнена');
    }

    let errorDiv = document.querySelector('.errors');
    errorDiv.innerHTML = errors.join('. \n');

}


function calcSum() {

    if (selectBrand === "Renault") {
        sum.innerHTML = 100;
    } else if (selectBrand === "Opel") {
        sum.innerHTML = 200;
    } else if (selectBrand === "Mazda") {
        sum.innerHTML = 300;
    } else if (selectBrand === "Jaguar") {
        sum.innerHTML = 400;
    }

    if (selectModel === "Model 1") {
        sum.innerHTML = Number(sum.textContent) + 100;
    } else if (selectModel === "Model 2") {
        sum.innerHTML = Number(sum.textContent) + 200;
    } else if (selectModel === "Model 3") {
        sum.innerHTML = Number(sum.textContent) + 300;
    }

    if (checkBoxGas.checked === true) {
        sum.innerHTML = Number(sum.textContent) + 100;
    } else if (checkBoxDisel.checked === true) {
        sum.innerHTML = Number(sum.textContent) + 200;
    } else if (checkBoxPetrol.checked === true) {
        sum.innerHTML = Number(sum.textContent) + 300;
    } else if (checkBoxElectro.checked === true) {
        sum.innerHTML = Number(sum.textContent) + 400;
    }

    if (engine <= 2.3) {
        sum.innerHTML = Number(sum.textContent) + 150;
    } else {
        sum.innerHTML = Number(sum.textContent) + 250;
    }

    if (newCar.checked === true) {
        sum.innerHTML = Number(sum.textContent) + 370;
    }

    if (oneTwo.checked === true) {
        sum.innerHTML = Number(sum.textContent) - 100;
    } else {
        sum.innerHTML = Number(sum.textContent) - 220;
    }
}

button.addEventListener('click', calcSum);
check.addEventListener('click', checkValidity)

form.addEventListener('submit', function (evt) {
    evt.preventDefault();
});