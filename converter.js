// ここからコードを書いてください
const setupConverter = () => {
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  converterFrom.innerHTML = "";
  converterTo.innerHTML = "";

  for (const unit of lengthUnit) {
    converterFrom.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
    converterTo.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
  }

  converterFrom.selectedIndex = 0;
  converterTo.selectedIndex = 1;

  const converterInputData = parseFloat(converterInput.value);
  if (isNaN(converterInputData)) {
    console.log("Please enter a valid number");
  }
  return;
};
export { setupConverter };
