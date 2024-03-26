const bSalary= prompt("Input Basic Salary")//prompts user for input
//Gross salary refers to the money paid before any deductions are made including all the benefits and allowances
function grossSalary(bSalary,benefits){
    return grossSalaryTotal=[bSalary + benefits]
}



//bSalary stands for Basic Salary which is prompted by the user to the machine


//output calculated paye and gross tax
function tax(bSalary){
  let Payee= 0;
  let grossTax = 0;
  let rated = 0; 
  if(bSalary > 0 && bSalary <= 24000){
      grossTax = (bSalary*0.10);
      Payee = bSalary - grossTax;
  }else if (bSalary >= 24001 && bSalary<= 32333){
      rated = (bSalary- 24000) * 0.25;
      grossTax = 2400 + rated
      Payee = bSalary-grossTax;
  }else if (bSalary >= 32334 && bSalary <= 500000){
      rated = (bSalary - 32333) * 0.30;
      grossTax = 2400 + 2083.25 + rated
      Payee = bSalary-grossTax;
  }else if (bSalary >= 500001 && bSalary<= 800000){
      rated = (bSalary- 500000) * 0.325;
      grossTax = 2400 + 2083.25 + 140300.1 + rated
      Payee= bSalary-grossTax;  
  }else if(bSalary > 800000){
      rated = (bSalary - 800000) * 0.35;
      grossTax = 2400 + 2083.25 + 140300.1 + 97500 + rated
      Payee = bSalary -grossTax;
  }
  return `This is the payee ,${Payee}`;
}




//output = NHIFDeductions
function nhifDeductions(bSalary){
  nhifDeduction = 0
  if (bSalary>0 && bSalary <=5999){
    nhifDeduction = 150

  }else if (bSalary>=6000 && bSalary<=7999){
    nhifDeduction=300
  }else if(bSalary>=8000 && bSalary<=11999){
    nhifDeduction=400
  }else if(bSalary>=8000 && bSalary<=11999){
    nhifDeduction=400
  }
  else if(bSalary>=12000 && bSalary<=14999){
    nhifDeduction=500
  }
  else if(bSalary>=15000 && bSalary<=19999){
    nhifDeduction=600
  }
  else if(bSalary>=20000 && bSalary<=24999){
    nhifDeduction=750
  }
  else if(bSalary>=25000 && bSalary<=29999){
    nhifDeduction=850
  }
  else if(bSalary>=30000 && bSalary<=34999){
    nhifDeduction=900
  }
  else if(bSalary>=35000 && bSalary<=39999){
    nhifDeduction=950
  }else if(bSalary>=40000 && bSalary<=44999){
    nhifDeduction=1000
  }
  else if(bSalary>=50000 && bSalary<=59999){
    nhifDeduction=1200
  }
  else if(bSalary>=60000 && bSalary<=69999){
    nhifDeduction=1300
  }
  else if(bSalary>=70000 && bSalary<=79999){
    nhifDeduction=1400
  }
  else if(bSalary>=80000 && bSalary<=89999){
    nhifDeduction=1500
  }
  else if(bSalary>=90000 && bSalary<=99999){
    nhifDeduction=1600
  }
  else {
    nhifDeduction=1700
  }

  return `This is the NHIF Deduction , ${nhifDeduction}`

  }

nhifDeductions(bSalary)
tax(bSalary)
benefits =[nhifDeduction+nssfdeductions]
grossSalary(bSalary,benefits)

// Net salary is your total take-home pay after any taxes and other employee benefits are deducted.

totalDeductions = [nhifDeduction+Payee+nssfdeductions]
  function netSalaryCalculation (grossSalaryTotal,totalDeductions)  {
    return netSalary=[grossSalaryTotal - totalDeductions]
  }
  netSalaryCalculation (grossSalaryTotal,totalDeductions) 