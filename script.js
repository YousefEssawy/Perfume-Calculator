function calculate() {
  const ratio = parseFloat(document.getElementById("ratio").value);
  const amount = parseFloat(document.getElementById("amount").value);
  const inputType = document.getElementById("inputType").value;
  const unit = document.getElementById("unit").value;

  let oilAmountMl = 0;
  let alcoholAmountMl = 0;
  let oilAmountG = 0;
  let alcoholAmountG = 0;
  let totalAmount = 0;

  if (inputType === "oil") {
    if (unit === "grams") {
      oilAmountMl = amount / 0.92; // Convert grams to ml
    } else {
      oilAmountMl = amount;
    }

    alcoholAmountMl = (oilAmountMl * (100 - ratio)) / ratio;
    totalAmount = oilAmountMl + alcoholAmountMl;
    alcoholAmountG = alcoholAmountMl * 0.789;
  } else if (inputType === "alcohol") {
    alcoholAmountMl = amount;
    oilAmountMl = (alcoholAmountMl * ratio) / (100 - ratio);
    totalAmount = oilAmountMl + alcoholAmountMl;
    oilAmountG = oilAmountMl * 0.92; // Convert ml to grams
  } else if (inputType === "total") {
    totalAmount = amount;
    oilAmountMl = (totalAmount * ratio) / 100;
    alcoholAmountMl = totalAmount - oilAmountMl;
    oilAmountG = oilAmountMl * 0.92; // Convert ml to grams
    alcoholAmountG = alcoholAmountMl * 0.789; // Convert ml to grams
  }

  document.getElementById(
    "oilMl"
  ).textContent = `Oil Amount: ${oilAmountMl.toFixed(2)} ml`;
  document.getElementById(
    "oilG"
  ).textContent = `Oil Amount: ${oilAmountG.toFixed(2)} g`;
  document.getElementById(
    "alcoholMl"
  ).textContent = `Alcohol Amount: ${alcoholAmountMl.toFixed(2)} ml`;
  document.getElementById(
    "alcoholG"
  ).textContent = `Alcohol Amount: ${alcoholAmountG.toFixed(2)} g`;
  document.getElementById(
    "totalAmount"
  ).textContent = `Total Amount: ${totalAmount.toFixed(2)} ml`;
}

function clearFields() {
  document.getElementById("ratio").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("inputType").value = "oil";
  document.getElementById("unit").value = "ml";

  document.getElementById("oilMl").textContent = "";
  document.getElementById("oilG").textContent = "";
  document.getElementById("alcoholMl").textContent = "";
  document.getElementById("alcoholG").textContent = "";
  document.getElementById("totalAmount").textContent = "";
}
