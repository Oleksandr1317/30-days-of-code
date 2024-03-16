
const countriesData = {
    Finland: {
      capital: 'Helsinki',
      population: 5540720,
      languages: ['Finnish', 'Swedish']
    },
    Estonia: {
      capital: 'Tallinn',
      population: 1326535,
      languages: ['Estonian']
    },
    Sweden: {
      capital: 'Stockholm',
      population: 10333467,
      languages: ['Swedish']
    },
    Denmark: {
      capital: 'Copenhagen',
      population: 5818553,
      languages: ['Danish']
    },
    Norway: {
      capital: 'Oslo',
      population: 5367580,
      languages: ['Norwegian']
    }
  };
  
  for (const [country, { capital, population, languages }] of Object.entries(countriesData)) {
    console.log(`Name: ${country}`);
    console.log(`Capital: ${capital}`);
    console.log(`Population: ${population}`);
    console.log(`Languages: ${languages.join(', ')}`);
  }

  // t2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name1,skills,[, , jsScore,reactScore]] = student
console.log(name1, skills, jsScore, reactScore);

// t3
function convertArrayToObject(students) {
    return students.map(student => {
      const [name, skills, scores] = student;
      return {
        name,
        skills,
        scores
      };
    });
  }
  
  const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ];
  
  console.log(convertArrayToObject(students));

  // t4
  const student1 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const newStudent = {...student1};

newStudent.skills.frontEnd.push({skills:"BootStrap",level:8});
newStudent.skills.backEnd.push({skills:"Exprss",level:9});
newStudent.skills.dataBase.push({skills:"SQL",level:8});
newStudent.skills.dataScience.push('SQL');

console.log(newStudent)