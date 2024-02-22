// task 1
let userPoint = parseInt(prompt("Enter user point"));

if (80 <= userPoint && userPoint <= 100) {
    console.log(`A`);
} else if (70 <= userPoint && userPoint <= 79) {
    console.log(`B`);
} else if (60 <= userPoint && userPoint <= 69) {
    console.log(`C`);
} else if (50 <= userPoint && userPoint <= 59) {
    console.log(`D`);
} else if (0 <= userPoint <= 49){
    console.log(`F`);
} else {
    console.log(`Error!`)
}

// task 2
let month = prompt("Enter the month");
let monthLowerCase = month.toLowerCase();
switch(monthLowerCase) {
    case "september":
        console.log(`Autumn`);
        break;
    case "october":
        console.log(`Autumn`);
        break;
    case "november":
        console.log(`Autumn`);
        break;   
    case "december":
        console.log(`Winter`);
        break; 
    case "january":
        console.log(`Winter`);
        break;   
    case "february":
        console.log(`Winter`);
        break;    
    case "march":
        console.log(`Spring`);
        break;  
    case "april":
        console.log(`Spring`);
        break;            
    case "may":
        console.log(`Spring`);
        break; 
    case "june":
        console.log(`Summer`);
        break;
    case "july":
        console.log(`Summer`);
        break;
    case "august":
        console.log(`Summer`);
        break;       
    default:
        console.log("Error!");
}

//task 3
let day = prompt("Enter the day");
let dayLowerCase = day.toLowerCase();
switch(dayLowerCase) {
    case "monday":
        console.log(`It's a workday`);
        break;
    case "tuesday":
        console.log(`It's a workday`);
        break;
    case "wednesday":
        console.log(`It's a workday`);
        break;
    case "thursday":
        console.log(`It's a workday`);
        break;
    case "friday":
        console.log(`It's a workday`);
        break;
    case "saturday":
        console.log(`It's a weekend`);
        break;
    case "sunday":
        console.log(`It's a weekend`);
        break;
    default:
        console.log("Unknown day");
}
