function isLifePhoneNumber(input) {
    var regex = /^8?((063)|(093))[0-9]{7}$/;
    return regex.test(input);
}

function checkLifePhoneNumber() {
    var phoneNumber = document.getElementById('lifePhone').value;
    var resultElement = document.getElementById('lifeResult');
    
    if (isLifePhoneNumber(phoneNumber)) {
        resultElement.innerText = 'Номер валідний для Life';
        resultElement.style.color = 'green';
    } else {
        resultElement.innerText = 'Номер не відповідає критеріям Life';
        resultElement.style.color = 'red';
    }
}

function isLvivPhoneNumber(input) {
    var regex = /^2?[0-9]{6}$/;
    return regex.test(input);
}

function checkLvivPhoneNumber() {
    var phoneNumber = document.getElementById('lvivPhone').value;
    var resultElement = document.getElementById('lvivResult');
    
    if (isLvivPhoneNumber(phoneNumber)) {
        resultElement.innerText = 'Номер валідний для Львова';
        resultElement.style.color = 'green';
    } else {
        resultElement.innerText = 'Номер не відповідає критеріям Львова';
        resultElement.style.color = 'red';
    }
}

function removeSpaces() {
    var str = document.getElementById('inputRemoveSpaces').value;
    var result = str.replace(/\s+/g, ' ').trim();
    document.getElementById('resultRemoveSpaces').innerText = result;
}

function clearTextFromHTMLTags() {
    var editorContent = document.getElementById('editor').value;
    var tagTemplate = /<\/?[a-zA-Z]{1,}[^>]*>/g;
    var clearedText = editorContent.replace(tagTemplate, '');
    document.getElementById('editor').value = clearedText;
 }
 
 function checkIfNumber() {
    var inputValue = document.getElementById('inputNumber').value;

    if (!isNaN(parseFloat(inputValue)) && isFinite(inputValue)) {
        document.getElementById('resultNumberCheck').innerText = "Введено число.";
    } else {
        document.getElementById('resultNumberCheck').innerText = "Введено не число.";
    }
}