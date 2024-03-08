const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `<h3>Please enter a valid height!${
      isNaN(height) ? " Empty value" : height
    } is not a valid number</h3>`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<h3>Please enter a valid weight!${
      isNaN(weight) ? " Empty value" : weight
    } is not a valid number</h3>`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `Result : Your BMI is ${BMI}`;
  }
  // BMI Categories:
  // Underweight = <18.5
  // Normal weight = 18.5–24.9
  // Overweight = 25–29.9
  // Obesity = BMI of 30 or greater
});
