function checkAge() {
    const inputField = document.getElementById('age').value;
    const errorTag = document.getElementById('error')
    try {
        // console.log(asdsfd)
        const age = parseInt(inputField);
        if(isNaN(age)) {
            console.log('Age not found', age, inputField)
            throw 'please inter a number'
        }
        else if(age < 18) {
            throw 'baccha kaccha not allowed'
        }
        errorTag.innerText = ''
    }
    catch(error) {
        console.log('ERROR: ', error)
        // errorTag.innerText = 'something is wrong'
        errorTag.innerText = 'ERROR: ' + error
    }
    finally {
        console.log('All done inside try-catch')
    }
    console.log(1111)
    document.getElementById('age').value = ''
}