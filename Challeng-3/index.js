
//bSalary stands for Basic Salary which is prompted by the user to the machine
function tax(bSalary){
  let taxed = 0;
  let grossTax = 0;
  let rated = 0; 
  if(bSalary > 0 && bSalary <= 24000){
      grossTax = (bSalary*0.10);
      taxed = bSalary - grossTax;
  }else if (bSalary >= 24001 && bSalary<= 32333){
      rated = (bSalary- 24000) * 0.25;
      grossTax = 2400 + rated
      taxed = bSalary-grossTax;
  }else if (bSalary >= 32334 && bSalary <= 500000){
      rated = (bSalary - 32333) * 0.30;
      grossTax = 2400 + 2083.25 + rated
      taxed = bSalary-grossTax;
  }else if (bSalary >= 500001 && bSalary<= 800000){
      rated = (bSalary- 500000) * 0.325;
      grossTax = 2400 + 2083.25 + 140300.1 + rated
      taxed = bSalary-grossTax;  
  }else if(bSalary > 800000){
      rated = (bSalary - 800000) * 0.35;
      grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
      taxed = bSalary -grossTax;
  }
  return taxed;
}


