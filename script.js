
window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi);
}
function calculateBmi() {
    const height = (document.querySelector('#height').value);
    const weight = (document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height <= 0) {
        result.innerText = "Please Enter a valid Height ";
        return;
    } else if (!weight || isNaN(weight) || weight <= 0) {
        result.innerText = "Please Enter a valid Weight";
        return;
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `You are Underweight: ${bmi}`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Overweight: ${bmi}`;
    } else if (bmi >= 30) {
        result.innerText = `Obese: ${bmi}`;
    }
}
