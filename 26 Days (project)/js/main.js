let c_length = countries.length
console.log(c_length)

const total_number_country = document.querySelector(`.total-number-country`)
const text_h2 = total_number_country.textContent + c_length
total_number_country.textContent = text_h2


