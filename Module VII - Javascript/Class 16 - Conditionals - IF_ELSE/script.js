let name = "Caio";
let schoolGrade = parseFloat(prompt("Enter with our School Grade: "));

function verifyIfApproved(name, schoolGrade) {
  if (schoolGrade >= 7) {
    return `Hello ${name}, you are APPROVED!`;
  } else {
    return `Hello ${name}, you have FAILED!`;
  }
}

verifyIfApproved(name, schoolGrade);
