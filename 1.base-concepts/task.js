"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let diskriminant = Math.pow(b, 2)-4*a*c;
  let quadraticRoot = 0;
  if (diskriminant>0) {
    quadraticRoot = (-b+Math.sqrt(diskriminant))/(2*a);
    arr.push(quadraticRoot);
    quadraticRoot = (-b-Math.sqrt(diskriminant))/(2*a);
    arr.push(quadraticRoot);
  } else if (diskriminant===0) {
    quadraticRoot = (-b)/(2*a);
    arr.push(quadraticRoot);
  }
  
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonths = percent/(1200);
  let payMonth = (amount-contribution)*(percentMonths+(percentMonths/(Math.pow((1+percentMonths),countMonths)-1)));
  let payAll = (payMonth*countMonths).toFixed(2);
  payAll = Number(payAll);
  return payAll;
  }
    

