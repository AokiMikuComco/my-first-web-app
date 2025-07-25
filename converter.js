// ここからコードを書いてください
const setupConverter = () => {
  const converterForm = document.querySelector(".converter-form"); //フォーム要素
  const converterInput = document.querySelector(".converter-input"); //入力値の input 要素（
  const converterFrom = document.querySelector(".converter-from"); //変換元の select 要素
  const converterTo = document.querySelector(".converter-to"); //変換先の select 要素
  const converterResult = document.querySelector(".converter-result"); //結果を表示する要素

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

  converterForm.addEventListener("input", () => {
    const converterInputData = parseFloat(converterInput.value);
    if (isNaN(converterInputData)) {
      converterResult.textContent = "Please enter a valid number";

      return;
    }
    let fromBase = converterFrom.value;
    let toBase = converterTo.value;

    let converterValue = (converterInputData * fromBase) / toBase;
    //{入力値} {変換元の単位} = {変換後の値} {変換先の単位}
    converterResult.textContent = `${converterInputData} ${
      lengthUnit[converterFrom.selectedIndex].name
    } = ${converterValue.toFixed(3)} ${
      lengthUnit[converterTo.selectedIndex].name
    }`;
  });
};

export { setupConverter };
