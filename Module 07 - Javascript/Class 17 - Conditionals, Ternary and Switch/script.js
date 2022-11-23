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

function verifyIfApprovedUsingTernaryOperator(name, schoolGrade) {
  return schoolGrade >= 7
    ? `Hello ${name}, you are APPROVED!`
    : `Hello ${name}, you have FAILED!`;
}

verifyIfApprovedUsingTernaryOperator(name, schoolGrade);

let dayOfWeek = prompt(`Hello, What day is today?\n
[ 1 ] - Sunday
[ 2 ] - Monday
[ 3 ] - Tuesday
[ 4 ] - Wednesday
[ 5 ] - Thursday
[ 6 ] - Friday
[ 7 ] - Saturday`);

switch (dayOfWeek) {
  case "1":
    console.log("So today is Sunday?");
    break;
  case "2":
    console.log("So today is Monday?");
    break;
  case "3":
    console.log("So today is Tuesday?");
    break;
  case "4":
    console.log("So today is Wednesday?");
    break;
  case "5":
    console.log("So today is Thursday?");
    break;
  case "6":
    console.log("So today is Friday?");
    break;
  case "7":
    console.log("So today is Saturday?");
    break;
  default:
    console.log("Please, enter a valid option: [1 - 7]");
}
