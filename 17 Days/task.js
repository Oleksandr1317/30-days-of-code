// task 1

localStorage.setItem('FirstName','Oleksandr');
localStorage.setItem('LastName','Test');
localStorage.setItem('age',20);
localStorage.setItem('country','Ukraine');
localStorage.setItem('City','Kiyv')

// task 2
const student = {
    firstName: "Oleksandr",
    lastName: 'Test',
    age: 20,
    skills: ['HTML', 'CSS', 'C#', 'C++', "C", "JS"],
    country: 'Ukraine'
};

const newStudent = JSON.stringify(student, undefined, 4);

localStorage.setItem('student', newStudent);

// task 3
const personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [],
    expenses: [],

    totalIncome:function() {
        let total = 0;
        for(let inc of this.incomes) {
            total+= inc.amount;
        }
        return total;
    },

    totalExpense: function() {
        let total = 0;
        for (let expense of this.expenses) {
            total += expense.amount;
        }
        return total;
    },

    accountInfo: function() {
        return `Name: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expenses: ${this.totalExpense()}`;
    },

    addIncome: function(description, amount) {
        this.incomes.push({ description, amount });
    },

    addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
    },

    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
}

personAccount.addIncome('Salary', 3000);
personAccount.addIncome('Amazon', 1000);
personAccount.addExpense('Rent', 1000);
personAccount.addExpense('Food', 300);
personAccount.addExpense('Transport', 200);
console.log(personAccount.accountInfo());
console.log("Balance:", personAccount.accountBalance());