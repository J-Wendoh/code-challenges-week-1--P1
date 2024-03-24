//This is the code structure of the program

function generateGrade(marks)//marks are the student's marks that are input by the user prompted by the program
{
//marks range from (0-100)
if (marks >= 80 && marks<= 100) {
    return ("A");
}
//`A` - (80-100)
else if (marks >= 60 && marks <= 79) {
    return ("B");
}
// `B`  - (60-79)

else if (marks >= 50 && marks <= 59){
    return ("C");
}
//`C`  - (50-59)

else if (marks >= 40 && marks <= 49){
    return ("D");
}
// `D`  - (40-49)

else if  (marks >=0 && marks <=39){
    return ("E");
}
//`E`  - anything below 40 but more than or equal to 0
else 
  console.error//program inputs error if the marks inseted is not in the range (0-100)
 return "Invalid Input.Please Try Again"
 //prompts user to check entry and try again 
}


function gradeGenerator() 
{
    let studentGrade = (generateGrade());
    console.log("Input Student Marks");

    if (studentGrade = generateGrade(marks) ) {
    return (`The student's grade is: ${studentGrade}`);
    }

    let result = (gradeGenerator());
    console.log(result);
    return(result)}
