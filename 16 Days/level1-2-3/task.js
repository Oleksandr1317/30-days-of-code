const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// task 1-2-3-4
console.warn(`Level 1`)
const sk = JSON.stringify(skills,undefined,4)
const ag = JSON.stringify(age,undefined,4)
const iM = JSON.stringify(isMarried,undefined,4)
const st = JSON.stringify(student,undefined,4)
console.log(sk);
console.log(ag);
console.log(iM);
console.log(st);
// task 1
console.warn('Level 2');

const selectedKey = {
    firstName:student.firstName,
    lastName:student.lastName,
    skills:student.skills
}

const JsonSt = JSON.stringify(selectedKey,undefined,4)

console.log(JsonSt)

// task 1-2
console.warn(`Level 3`)
const stParse = JSON.parse(txt,undefined,4)
console.log(stParse)

const data = JSON.parse(txt,undefined,4)
const skillfulUser = Object.keys(data).reduce((prevUser, currentUser) => {
    return data[currentUser].skills.length > data[prevUser].skills.length ? currentUser : prevUser;
});

console.log("User with the most skills:", skillfulUser);
