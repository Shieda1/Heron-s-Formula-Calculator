// https://calculator.swiftutors.com/herons-formula-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofTrianglebyHeronsFormulaRadio = document.getElementById('areaofTrianglebyHeronsFormulaRadio');
const lengthofTriangleSideaRadio = document.getElementById('lengthofTriangleSideaRadio');
const lengthofTriangleSidebRadio = document.getElementById('lengthofTriangleSidebRadio');
const lengthofTriangleSidecRadio = document.getElementById('lengthofTriangleSidecRadio');

let areaofTrianglebyHeronsFormula;
let lengthofTriangleSidea = v1;
let lengthofTriangleSideb = v2;
let lengthofTriangleSidec = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

areaofTrianglebyHeronsFormulaRadio.addEventListener('click', function() {
  variable1.textContent = 'Length of Triangle Side a';
  variable2.textContent = 'Length of Triangle Side b';
  variable3.textContent = 'Length of Triangle Side c';
  lengthofTriangleSidea = v1;
  lengthofTriangleSideb = v2;
  lengthofTriangleSidec = v3;
  result.textContent = '';
});

lengthofTriangleSideaRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of Triangle by Heron\'s Formula';
  variable2.textContent = 'Length of Triangle Side b';
  variable3.textContent = 'Length of Triangle Side c';
  areaofTrianglebyHeronsFormula = v1;
  lengthofTriangleSideb = v2;
  lengthofTriangleSidec = v3;
  result.textContent = '';
});

lengthofTriangleSidebRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of Triangle by Heron\'s Formula';
  variable2.textContent = 'Length of Triangle Side a';
  variable3.textContent = 'Length of Triangle Side c';
  areaofTrianglebyHeronsFormula = v1;
  lengthofTriangleSidea = v2;
  lengthofTriangleSidec = v3;
  result.textContent = '';
});

lengthofTriangleSidecRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of Triangle by Heron\'s Formula';
  variable2.textContent = 'Length of Triangle Side a';
  variable3.textContent = 'Length of Triangle Side b';
  areaofTrianglebyHeronsFormula = v1;
  lengthofTriangleSidea = v2;
  lengthofTriangleSideb = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofTrianglebyHeronsFormulaRadio.checked)
    result.textContent = `Area of Triangle by Heron's Formula = ${computeAreaofTrianglebyHeronsFormula().toFixed(2)}`;

  else if(lengthofTriangleSideaRadio.checked)
    result.textContent = `Length of Triangle Side a = ${computeLengthofTriangleSidea().toFixed(2)}`;

  else if(lengthofTriangleSidebRadio.checked)
    result.textContent = `Length of Triangle Side b = ${computeLengthofTriangleSideb().toFixed(2)}`;

  else if(lengthofTriangleSidecRadio.checked)
    result.textContent = `Length of Triangle Side c = ${computeLengthofTriangleSidec().toFixed(2)}`;
})

// calculation

function computeAreaofTrianglebyHeronsFormula() {
  return Math.sqrt(computeP() * (computeP() - Number(lengthofTriangleSidea.value)) * (computeP() - Number(lengthofTriangleSideb.value)) * (computeP() - Number(lengthofTriangleSidec.value)));
}

function computeLengthofTriangleSidea() {
  return (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value)) + Number(salvageValue.value);
}

function computeLengthofTriangleSideb() {
  return Number(assetValue.value) - (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value));
}

function computeLengthofTriangleSidec() {
  return (Number(assetValue.value) - Number(salvageValue.value)) / Number(straightLineDepreciation.value);
}

function computeP() {
  return (Number(lengthofTriangleSidea.value) + Number(lengthofTriangleSideb.value) + Number(lengthofTriangleSidec.value)) / 2;
}