const yearElement = document.getElementById(`year`)
const wrapperElements = document.querySelectorAll(`.wrapper`)
const h1Element = document.querySelector(`h1`)
const h2Element = document.querySelector(`h2`)
const dateTimeElement = document.getElementById(`date-time`)
const LiElements = document.querySelectorAll(`li`)
const ulElement = document.querySelector(`ul`)

// styles

// Does center items
wrapperElements.forEach(item => {
    item.style.display = `flex`;
    item.style.flexDirection = `column`;
    item.style.alignItems = 'center';
    item.style.fontFamily = `sans-serif`
})

// h1 element
h1Element.style.fontSize = `1.7rem`
h1Element.style.marginBottom = `0.2rem`
yearElement.style.fontSize = `4rem`

// h2 element
h2Element.style.fontSize = `1rem`
h2Element.style.marginTop = `0.4rem`
h2Element.style.marginBottom = `0.2rem`
h2Element.style.textDecoration = `underLine`
h2Element.style.fontWeight = `normal`

// date-time element
dateTimeElement.style.padding = `0.4rem 1rem`
dateTimeElement.style.marginBottom = `0.2rem`
dateTimeElement.style.borderRadius = `0.2rem`

// li/ul elements
ulElement.style.listStyleType = `none`

LiElements.forEach((item,i) => {
    item.style.padding = `0.7rem 20rem 0.7rem 1rem`
    item.style.marginBottom = `0.2rem`
    item.style.borderRadius = `0.2rem`
    if (i === 0) {
        item.className = `done`
        item.style.backgroundColor = `green`
    } else if (i === 1) {
        item.className = `Ongoing`
        item.style.backgroundColor = `yellow`
    } else {
        item.className = `coming`
        item.style.backgroundColor = `red`
    }
})

// function

function changeYearColor() {
    const date = new Date();
    let year = date.getFullYear();
    yearElement.textContent = year;
    const yearColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    yearElement.style.color = yearColor;
}

setInterval(changeYearColor,1000);

function changeDateTime() {
    const date = new Date();
    const year = date.getFullYear()
    const month = date.getMonth();
    let monthName;
    switch(month){
        case 0:
            monthName = "January";
            break;
        case 1:
            monthName = "February";
            break;
        case 2:
            monthName = "March";
            break;
        case 3:
            monthName = "April";
            break;
        case 4:
            monthName = "May";
            break;
        case 5:
            monthName = "June";
            break;
        case 6:
            monthName = "July";
            break;
        case 7:
            monthName = "August";
            break;
        case 8:
            monthName = "September";
            break;
        case 9:
            monthName = "October";
            break;
        case 10:
            monthName = "November";
            break;
        case 11:
            monthName = "December";
            break;
        default:
            monthName = "Invalid month";
    }
    let day = date.getDay();
    if (day < 10) {
        day = `0` + day;
    } else {
        day = day;
    }

    let hours = date.getHours();
    if (hours < 10) {
        hours = `0`+hours
    } else {hours = hours}
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0`+minutes
    } else {minutes = minutes}
    let seconds = date.getSeconds();

    if (seconds < 10) {
        seconds = `0`+seconds
    } else {seconds = seconds}

    let time = `${hours}:${minutes}:${seconds}`

    dateTimeElement.textContent = `${monthName} ${day}, ${year} ${time}`
}

setInterval(changeDateTime,1000);

function changeDateTimeColor() {
    const dateTimeColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    dateTimeElement.style.backgroundColor = dateTimeColor;
}

setInterval(changeDateTimeColor,1000);