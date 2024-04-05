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
ulElements.style.marginTop = `0.1rem`;
ulElements.style.marginBottom = `0.2rem`

// h2 elements
const h2Elements = document.createElement(`h2`);
wrapper.appendChild(h2Elements);
// styles
h2Elements.textContent = `Oleksandr Gladkoskok`;
h2Elements.style.marginTop = `0.2rem`;
h2Elements.style.marginBottom = `0.2rem`;
h2Elements.style.fontSize = `1.5rem`;
h2Elements.style.fontWeight = `600`

// social links
const socialLinks = [
    {
      social: 'Discord',
      url: 'https://www.discord.com',
      fontawesomeIcon: '<i class="fa-brands fa-discord"></i>'
    },
    {
      social: 'Twitter',
      url: 'https://twitter.com',
      fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
    },
    {
      social: 'Github',
      url: 'https://github.com/Oleksandr1317',
      fontawesomeIcon: '<i class="fa-brands fa-github"></i>'
    }
  ];

// Container for social links
const divSocialLinkContainer = document.createElement(`div`);
wrapper.appendChild(divSocialLinkContainer);
divSocialLinkContainer.style.marginTop = `0.2rem`

socialLinks.forEach(link => {
    const socialLinkElement = document.createElement(`a`);
    socialLinkElement.href = link.url;
    socialLinkElement.className = `social-link`;
    socialLinkElement.innerHTML = link.fontawesomeIcon;
    socialLinkElement.title = link.social;
    divSocialLinkContainer.appendChild(socialLinkElement)

    socialLinkElement.style.color = `black`;
    socialLinkElement.style.padding = `0rem 0.3rem 0rem 0.3rem`;
    socialLinkElement.style.fontSize = `1.4rem`;
});

let bio =  'These are some of my first mini JS projects. And there should be some information here. So I decided to paste it here.';

const pBio = document.createElement(`p`);
wrapper.appendChild(pBio);
// styles
pBio.textContent = bio;
pBio.style.fontSize = `0.7rem`;
pBio.style.textAlign = `center`;

const aboutMeContainer = document.createElement(`div`);
wrapper.appendChild(aboutMeContainer);

aboutMeContainer.style.fontSize = `0.8rem`

let author = {
    firstName: 'Oleksandr',
    lastName: 'Gladkoskok',
    titles: [
      ['🌱', 'Student'],
      ['💻', 'Programmer'],
      ['🌐', 'Developer'],
    ]};

const titlesElement = document.createElement(`div`);
titlesElement.textContent = `Titles`;
aboutMeContainer.appendChild(titlesElement);

author.titles.forEach(title => {
    const titleElement = document.createElement(`div`);
    titleElement.textContent = `${title[0]} ${title[1]}`;
    titlesElement.appendChild(titleElement);
    titleElement.style.fontSize = `0.77rem`;
    titlesElement.style.marginLeft = `1.4rem`
})

const skills = [
    'Web Development',
    'Programming',
    'Databases',
];

const skillsCont = document.createElement(`div`);
aboutMeContainer.appendChild(skillsCont);

skillsCont.textContent = `Skills`;

skills.forEach(skill => {
    const skillElement = document.createElement(`div`);
    skillElement.innerHTML = '<span style="color: green;">&#9989;</span> ' + skill;
    skillsCont.appendChild(skillElement);
    skillElement.style.fontSize = `0.77rem`;
    skillsCont.style.marginLeft = `1.4rem`
})

const Couse = [
    'C# course',
    'Asp.net mvc course',
    'SQL course',
    'HTML CSS course'];

const quaCont = document.createElement(`div`);
aboutMeContainer.appendChild(quaCont);

quaCont.textContent = `Course completed`;

Couse.forEach(c => {
    const coursElement = document.createElement(`div`);
    coursElement.innerHTML = `<span>&#9745;</span>` +  ` ${c}`;
    quaCont.appendChild(coursElement);
    coursElement.style.fontSize = `0.77rem`
    quaCont.style.marginLeft = `1.4rem`
})

aboutMeContainer.style.display = `flex`;
aboutMeContainer.style.justifyContent = `space-between`;

let keywords = [
    'HTML',
    'HTML5',
    'CSS',
    'CSS3',
    'JS',
    'JavaScript',
    'ES6',
    'Promise',
    'async await',
    'Database',
    'React',
    'React Hooks',
    'Context API',
    'React Router',
    'Web Storage',
    'localStorage',
    'sessionStorage',
    'Redux',
    'Node',
    'MongoDB',
    'SQL',
    'API',
    'DOM',
    'data science',
    'MERN',
    'Python',
    'Flask',
    'Statistics',
    'Linear Algebra',
    'Numpy',
    'Pandas',
    'Scipy',
    'Scikit-learn',
    'Visualization',
    'D3.js'
  ];

  const pKey = document.createElement(`p`);
  wrapper.appendChild(pKey);
  pKey.textContent = `Keywords`;
  pKey.style.display = `flex`;
  pKey.style.textAlign = `left`;
  pKey.style.width = `36rem`

  const keywordsContainer = document.createElement(`div`);
  wrapper.appendChild(keywordsContainer);

  keywords.forEach(key => {
    const keyElement = document.createElement(`div`);
    keyElement.textContent = `# ${key}`;
    keyElement.style.fontStyle = `italic`
    const keywordsColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    keyElement.style.backgroundColor = keywordsColor;
    keywordsContainer.appendChild(keyElement);
    keyElement.style.borderRadius = `0.4rem`
    keyElement.style.textAlign = `center`
    keyElement.style.padding = `0.1rem 0.3rem 0.1rem 0.2rem`;
    keyElement.style.margin = `0.2rem 0.2rem 0.3rem 0.2rem`
    keyElement.style.fontSize = `0.78rem`;
    keyElement.style.fontWeight = `600`
 } )

 keywordsContainer.style.display = `flex`;
 keywordsContainer.style.width = `35rem`;
 keywordsContainer.style.height = `auto`;
 keywordsContainer.style.flexWrap = `wrap`;
 keywordsContainer.style.fontFamily = `sans-serif`