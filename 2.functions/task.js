function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let calcSum = 0;
  for (let element of arr) {
    if (element>max) {
      max = element;
    } else if (element < min) {
      min = element;
      }
    calcSum = calcSum + element
    }
  let avg = Number((calcSum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let summa = 0;
  if (arr.length > 0) {
    for (let element of arr) {
      summa = summa + element;
    }
  }
  return summa
}

function differenceMaxMinWorker(...arr) {
  let min;
  let max;
  let calcDifferenceMaxMin = 0;
  if (arr.length > 0) {
    min = arr[0];
    max = arr[0];
    for (let element of arr) {
      if (element > max) {
        max = element;
      } else if (element < min) {
        min = element;
      }
    }
    calcDifferenceMaxMin = max-min;
  }
  return calcDifferenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length > 0) {
    for (let element of arr) {
      if (element % 2 === 0) {
        sumEvenElement = sumEvenElement + element;
      } else {
        sumOddElement = sumOddElement + element;
      }
    } 
  }
  let differenceEvenOdd = sumEvenElement - sumOddElement;
  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let averageEvenElements = 0;
  if (arr.length > 0) {
    for (let element of arr) {
      if (element % 2 === 0) {
        sumEvenElement = sumEvenElement + element;
        countEvenElement = countEvenElement + 1;
      }
    }
    averageEvenElements = sumEvenElement / countEvenElement;
  }
  return averageEvenElements
}

function makeWork (arrOfArr, func) {
  let maxWorkerResulte = -Infinity;
  let resultOfFunction;
  for (let arrey of arrOfArr) {
    resultOfFunction = func(...arrey);
    if (resultOfFunction > maxWorkerResulte) {
      maxWorkerResulte = resultOfFunction;
    }
  }
  return maxWorkerResulte
}
