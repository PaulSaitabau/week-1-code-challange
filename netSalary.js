// calculates  tax based on basic salary
function calculateTax(basicSalary) {
    if (basicSalary <= 24000) {
       return basicSalary * 0.1;
    }
    if (basicSalary <= 40000) {
       return basicSalary * 0.15;
    }
    if (basicSalary <= 60000) {
       return basicSalary * 0.2;
    }
    if (basicSalary <= 80000) {
       return basicSalary * 0.25;
    }
    if (basicSalary <= 100000) {
       return basicSalary * 0.3;
    }
    return basicSalary * 0.35;
   }
   // calculates NHIF based on basic salary
   function calculateNHIF(basicSalary) {
    if (basicSalary <= 5999) {
       return 150;
    }
    if (basicSalary <= 7999) {
       return 300;
    }
    if (basicSalary <= 11999) {
       return 400;
    }
    if (basicSalary <= 14999) {
       return 500;
    }
    if (basicSalary <= 19999) {
       return 600;
    }
    if (basicSalary <= 24999) {
       return 750;
    }
    if (basicSalary <= 29999) {
       return 850;
    }
    if (basicSalary <= 34999) {
       return 900;
    }
    if (basicSalary <= 39999) {
       return 950;
    }
    if (basicSalary <= 44999) {
       return 1000;
    }
    if (basicSalary <= 49999) {
       return 1100;
    }
    if (basicSalary <= 59999) {
       return 1200;
    }
    if (basicSalary <= 69999) {
       return 1300;
    }
    if (basicSalary <= 79999) {
       return 1400;
    }
    if (basicSalary <= 89999) {
       return 1500;
    }
    if (basicSalary <= 99999) {
       return 1600;
    }
    return 1700;
   }
   // calculates  NSSF based on basic salary
   function calculateNSSF(basicSalary) {
    const employeeContribution = basicSalary * 0.06;
    const employerContribution = basicSalary * 0.06;
    return employeeContribution;
   }
   
   //calclates net salary after deductions
   function calculateNetSalary(basicSalary, benefits) {
    const tax = calculateTax(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssfEmployee = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const totalDeductions = tax + nhif + nssfEmployee;
    const netSalary = grossSalary - totalDeductions;
    return netSalary;
   }
   
   