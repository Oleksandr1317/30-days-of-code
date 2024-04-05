// body Element
const bodyElem = document.body;
// styles
bodyElem.style.fontFamily = `serif`;

// wrapper DIV
const wrapper  = document.createElement(`div`);
bodyElem.appendChild(wrapper);
// styles
wrapper.style.display = `flex`;
wrapper.style.flexDirection = `column`;
wrapper.style.alignItems = `center`;

// h1 elem
const h1ElemWithYear = document.createElement(`h1`);
const spanYear = document.createElement(`span`);
wrapper.appendChild(h1ElemWithYear);

// styles
h1ElemWithYear.textContent = `Oleksandr challenges in `;
h1ElemWithYear.style.fontWeight = `100`;
h1ElemWithYear.style.fontSize = `2rem`;
h1ElemWithYear.style.marginBottom = `0.3rem`

function changeYearColor() {
    const date = new Date();
    let year = date.getFullYear();
    spanYear.textContent = year;
    const yearColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    spanYear.style.color = yearColor;
}

setInterval(changeYearColor, 1000);
h1ElemWithYear.appendChild(spanYear);
spanYear.style.fontSize = `3.5rem`
spanYear.style.fontWeight = `bold`
changeYearColor();

// p Element with Couse name
const pCourseName = document.createElement(`p`);
wrapper.appendChild(pCourseName);
// styles
pCourseName.textContent = `30DaysOfJavaScript Challenge`;
pCourseName.style.textDecoration = `underLine`;
pCourseName.style.fontSize = `0.9rem`;
pCourseName.style.marginTop = `0.2rem`;
pCourseName.style.marginBottom = `0.3rem`

// dataTime p element
const dateTimeElement = document.createElement(`p`);

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

    const dateTimeColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    dateTimeElement.style.backgroundColor = dateTimeColor;
}
setInterval(changeDateTime,1000);
changeDateTime();
wrapper.appendChild(dateTimeElement);

// styles
dateTimeElement.style.fontSize = `0.8rem`
dateTimeElement.style.padding = `0.3rem 0.6rem 0.3rem 0.6rem`;
dateTimeElement.style.marginTop = `0.2rem`

// ul elements with li
const ulElements = document.createElement(`ul`);
wrapper.appendChild(ulElements);

function createCourseLi(courseName, topics, status) {
    const liElement = document.createElement('li');
    const piElement = document.createElement(`p`)
    piElement.textContent = `30 Days Of ${courseName}`;
    liElement.appendChild(piElement);

    const detailsElement = document.createElement('details');
    liElement.appendChild(detailsElement);

    const summaryElement = document.createElement('summary');
    summaryElement.textContent = courseName;
    detailsElement.appendChild(summaryElement);

    const pElement = document.createElement('p');
    detailsElement.appendChild(pElement);
    pElement.innerHTML = topics.join('<br>');

    const statusElement = document.createElement('p');
    liElement.appendChild(statusElement);

    if (status === 'done') {
        statusElement.textContent = 'Done';
        piElement.style.textDecoration = `underLine`;
        liElement.style.backgroundColor = `rgb(131, 255, 115)`
        piElement.style.color = `rgb(108, 148, 148)`;
    } else if (status === 'ongoing') {
        statusElement.textContent = 'Ongoing';
        piElement.style.textDecoration = `underLine`;
        piElement.style.color = `rgb(108, 148, 148)`;
        liElement.style.backgroundColor = `rgb(255, 207, 87)`
    } else if (status === 'coming') {
        statusElement.textContent = 'Coming';
        liElement.style.backgroundColor = `rgb(255, 79, 79)`
    } else {
        statusElement.textContent = 'Unknown';
    }
    liElement.style.width = `37.5rem`
    liElement.style.height = `auto`
    liElement.style.display = `flex`;
    liElement.style.justifyContent = `space-between`
    liElement.style.alignItems = `center`
    liElement.style.padding = `0.5rem 0.8rem 0.5rem 0.8rem`
    liElement.style.marginBottom = `0.13rem`
    return liElement;
}

const liPython = createCourseLi('Python', ['Flask', 'Numpy', 'Pandas', 'Statistics', 'API', 'MongoDB'], 'done');
const liJS = createCourseLi('JavaScript', ['ES6', 'DOM', 'Fetch API', 'Async/Await', 'React', 'Vue.js'], 'ongoing');
const liHTML_CSS = createCourseLi('HTML & CSS', ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design', 'SASS/SCSS'], 'coming');
const liReact = createCourseLi('React', ['Redux', 'React Router', 'Context API', 'React Hooks', 'Styled Components', 'Next.js'], 'coming');
const liReactNative = createCourseLi('ReactNative', ['Expo', 'Navigation', 'AsyncStorage', 'Redux', 'REST API', 'GraphQL'], 'coming');
const liFullStack = createCourseLi('FullStack', ['Frontend (HTML, CSS, JavaScript, React, etc.)', 'Backend (Node.js, Express, Django, etc.)', 'Databases (MongoDB, MySQL, PostgreSQL, etc.)', 'REST API', 'GraphQL', 'Authentication & Authorization'], 'coming');
const liData = createCourseLi('Data Analysis', ['Python (NumPy, Pandas, Matplotlib, etc.)', 'Statistics', 'Machine Learning', 'Data Visualization', 'Big Data (Hadoop, Spark, etc.)', 'SQL'], 'coming');
const liMachineLearning = createCourseLi('Machine Learning', ['Python (Scikit-learn, TensorFlow, Keras, etc.)', 'Deep Learning', 'Neural Networks', 'Reinforcement Learning', 'Natural Language Processing', 'Computer Vision'], 'coming');

ulElements.appendChild(liPython);
ulElements.appendChild(liJS);
ulElements.appendChild(liHTML_CSS);
ulElements.appendChild(liReact);
ulElements.appendChild(liReactNative);
ulElements.appendChild(liFullStack);
ulElements.appendChild(liData);
ulElements.appendChild(liMachineLearning);

// styles
ulElements.style.fontSize = `0.7rem`;
ulElements.style.marginTop = `0.1rem`