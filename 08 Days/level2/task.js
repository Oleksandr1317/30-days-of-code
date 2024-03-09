const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
// task 1
function findMostSkilled(users) {
    let mostSkilled = null; 
    let maxSkills = 0;
  
    for (const name in users) {
      const user = users[name];
  
      if (user && user.skills) {
        if (user.skills.length > 0) {
          const skillCount = user.skills.length;
  
          if (skillCount > maxSkills) {
            mostSkilled = name;
            maxSkills = skillCount;
          }
        }
      }
    }
  
    return mostSkilled;
  }
  
  console.log(findMostSkilled(users));

  // task 2
  const logCount = Object.values(users).filter(user => user.isLoggedIn).length;
  const Points50 = Object.values(users).filter(user => user.points >= 50).length;
  console.log(`IsLoggedIn users count = ${logCount}.\nUsers which has pount >= 50 = ${Points50}`);

  // task 3
const mernSkills = ['MongoDB', 'Express', 'React', 'Node'];

function findMernStuckDevelopers(user) {
    if(!user.skills || user.skills.length === 0){
        return false;
    }
    const userMernSkills = user.skills.filter(skill => mernSkills.includes(skill))
    return userMernSkills.length === mernSkills.length
}
const mernDevs = Object.values(users).filter(user => findMernStuckDevelopers(user));
console.log(mernDevs)


// task 4
const myInfo = {
    name : 'Alex'
}
const updatedUsers = {...users,...myInfo}
console.log(updatedUsers)
// or const updatedUsers = Object.assign({}, users, myInfo);

// task 5
const userKeys = Object.keys(users);
console.log(userKeys);

// task 6
console.log(Object.values(users))

// task 7
const countries = {
    France: {
      capital: "Paris",
      population: 65273511,
      languages: ["French"]
    },
    Germany: {
      capital: "Berlin",
      population: 83190556,
      languages: ["German"]
    }
  };

  function printCountryInfo(countryName) {
    if (!countries[countryName]) {
      console.log(`${countryName} does not exist in the countries object.`);
      return;
    }
  
    const country = countries[countryName];
    console.log(`Country: ${countryName}`);
    console.log(`\tCapital: ${country.capital}`);
    console.log(`\tPopulation: ${country.population}`);
    console.log(`\tLanguages: ${country.languages.join(", ")}`);
  }
  

  printCountryInfo("France");
  printCountryInfo("Germany");
  