let month = prompt("Enter the month:");
month = month.toLowerCase();
let daysInMonth;
switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log("31");
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log("30");
        break;
    case "february":
        console.log("28");
        break;
    default:
        console.log("Error!");
}
