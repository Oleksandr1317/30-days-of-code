const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya"
  ];
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB"
  ];
  
const mernStack = ["MongoDB", "Express", "React", "Node"];

let copiedArray = [];
for (let i = 0; i < countries.length; i++) {
    copiedArray.push(countries[i]);
}
console.log(copiedArray);

// TASK 2
console.log(` `);
console.log(`TASK 2`);
const copiedCountries = countries.slice();
const sortedCountries = copiedCountries.sort();
console.log(sortedCountries);

// TASK 3
console.log(` `);
console.log(`TASK 3`);
webTechs.sort();
console.log(webTechs);
mernStack.sort();
console.log(mernStack);

// task 4
console.log(` `)
console.log(`TASK 4`)
const countries1 = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
let countriesWithLand = [];
for (let i = 0; i < countries1.length; i++) {
    if (countries1[i].toUpperCase().includes('LAND')){
        countriesWithLand.push(countries1[i]);
    }
}
if (countriesWithLand.length > 0) {
    console.log(countriesWithLand);
} else {
    console.log("All these are countries without land");
}

// task 5
console.log(` `)
console.log(`TASK 5`)
let count = countries1[0];
for(let i = 0;i < countries1.length;i++) {
    if (countries1[i].length > count.length){
        count = countries1[i];
    }
}
console.log(count);
//task 6 identity as task 4!!!
// task 7
console.log(` `)
console.log(`TASK 7`)
let t7 = [];
    for (let j = 0;j < countries1.length;j++){
        if (countries1[j].length == 4) {
            t7.push(countries1[j]);
        }
    }
console.log(t7);

// task 8
console.log(` `)
console.log(`TASK 8`)
let t8 = [];
for (let i = 0; i < countries1.length; i++) {
    if (countries1[i].includes(' ')){
        t8.push(countries1[i]);
    }
}
console.log(t8);

// task 9
console.log(` `)
console.log(`TASK 9`)
let capitalizedCountries = [];
for (let i = 0; i < countries1.length; i++) {
    let country = countries1[i];
    let capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1);
    capitalizedCountries.push(capitalizedCountry);
}

console.log(capitalizedCountries);
