console.warn(`Task 1`)

let name = 'Alex';
let lastName = 'Test';

function OutputUserName(name) {
    function getLastName(lastName) {
        return lastName;
    }
    return `My name is ${name} ${getLastName(lastName)}`;
}

console.log(OutputUserName(name));

console.warn(`Task 2`)

function outherFunction() {
    let obj = {};

    function getFirstName() {
        obj['firstName'] = 'Alex';
        return obj['firstName'];
    }

    function getLastName() {
        obj['lastName'] = 'Test';
        return obj['lastName'];
    }

    function getAge() {
        obj['age'] = 20;
        return obj['age'];
    }

    return {
        getAge: getAge,
        getFirstName: getFirstName,
        getLastName: getLastName
    };
}

const myObject = outherFunction();

console.log(myObject.getFirstName());
console.log(myObject.getLastName());
console.log(myObject.getAge());

console.warn(`Task 3`)

function personAccount() {
    let firstName = 'John';
    let lastName = 'Doe';
    let income = [];
    let expenses = [];

    function totalIncome() {
        let total = 0;
        for (let i = 0; i < income.length; i++) {
            total += income[i].amount;
        }
        return total;
    }

    function totalExpense() {
        let total = 0;
        for (let i = 0; i < expenses.length; i++) {
            total += expenses[i].amount;
        }
        return total;
    }

    function accountInfo() {
        return `Name: ${firstName} ${lastName}\nTotal Income: ${totalIncome()}\nTotal Expense: ${totalExpense()}`;
    }

    function addIncome(amount, description) {
        income.push({ amount: amount, description: description });
    }

    function addExpense(amount, description) {
        expenses.push({ amount: amount, description: description });
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        accountInfo: accountInfo,
        addIncome: addIncome,
        addExpense: addExpense,
        accountBalance: accountBalance
    };
}

const myAccount = personAccount();
myAccount.addIncome(500, 't1');
myAccount.addIncome(600, 't2');
myAccount.addExpense(100, 't3');
myAccount.addExpense(50, 't4');
console.log(myAccount.accountInfo());
console.log('Current Balance:', myAccount.accountBalance());

