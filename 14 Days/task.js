let num = parseInt(prompt("Enter your number: "))

function checkTryAndCatch(num) {
    try{
        if(num > 5) throw 'Number > 5'
        if(num == 5) throw 'Number = 5'
        if(num < 5) throw 'Number < 5'
        if(num == '') throw 'empty'
    }
    catch (err) {
        console.warn(err)
    }
    finally {
        console.log('Operation complete')
    }
}

checkTryAndCatch(num);