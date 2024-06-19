function checkDigits() {
    var str = document.getElementById('inputCheckDigits').value;
    var result = "Це дійсне число";
    var dotCount = 0;

    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);

        if (charCode === 46 || charCode === 44) { // '.' or ','
            dotCount++;
        } else if (charCode < 48 || charCode > 57) {
            result = "Це не дійсне число";
            break;
        }
    }

    if (dotCount > 1) {
        result = "Це не дійсне число";
    }

    document.getElementById('resultCheckDigits').innerText = result;
}

function floatingText() {
    var textElement = document.getElementById('marqueeText');
    var text = textElement.innerText + " ";

    function animate() {
        text = text.substring(1) + text.charAt(0);
        textElement.innerText = text;
        setTimeout(animate, 200);
    }

    animate();
}

window.onload = floatingText;

function removeSpaces() {
    var str = document.getElementById('inputRemoveSpaces').value;
    var result = str.replace(/\s+/g, ' ').trim();
    document.getElementById('resultRemoveSpaces').innerText = result;
}

function checkEmail() {
    var email = document.getElementById('inputCheckEmail').value;
    var result = "Це коректна електронна адреса";

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        result = "Це некоректна електронна адреса";
    }

    document.getElementById('resultCheckEmail').innerText = result;
}

function showCurrentDate() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, '0');
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var year = now.getFullYear();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');

    var currentDate = `Сьогодні ${day}/${month}/${year} ${hours}:${minutes}`;
    document.getElementById('resultCurrentDate').innerText = currentDate;
}

function showBirthDayOfWeek() {
    var birthday = document.getElementById('inputBirthday').value;
    var date = new Date(birthday);
    var dayOfWeek = date.toLocaleDateString('uk-UA', { weekday: 'long' });
    var result = `Ви народились у ${dayOfWeek}`;
    document.getElementById('resultBirthDayOfWeek').innerText = result;
}

function showDayOfWeekInFuture() {
    var result = getDayOfWeekInFuture(3);
    document.getElementById('resultDayOfWeekInFuture').innerText = result;
}

function getDayOfWeekYearsAgo() {
    var inputDate = document.getElementById('inputDate').value;
    var currentDate = new Date(inputDate);

    var date10YearsAgo = new Date(currentDate.getFullYear() - 10, currentDate.getMonth(), currentDate.getDate());
    var date12YearsAgo = new Date(currentDate.getFullYear() - 12, currentDate.getMonth(), currentDate.getDate());
    var date25YearsAgo = new Date(currentDate.getFullYear() - 25, currentDate.getMonth(), currentDate.getDate());
    var date38YearsAgo = new Date(currentDate.getFullYear() - 38, currentDate.getMonth(), currentDate.getDate());

    function getDayOfWeek(date) {
        return date.toLocaleDateString('uk-UA', { weekday: 'long' });
    }

    var dayOfWeek10YearsAgo = getDayOfWeek(date10YearsAgo);
    var dayOfWeek12YearsAgo = getDayOfWeek(date12YearsAgo);
    var dayOfWeek25YearsAgo = getDayOfWeek(date25YearsAgo);
    var dayOfWeek38YearsAgo = getDayOfWeek(date38YearsAgo);

    var resultElement = document.getElementById('resultDayOfWeekYearsAgo');
    resultElement.innerHTML = `
        <p>День тижня 10 років тому: ${dayOfWeek10YearsAgo}</p>
        <p>День тижня 12 років тому: ${dayOfWeek12YearsAgo}</p>
        <p>День тижня 25 років тому: ${dayOfWeek25YearsAgo}</p>
        <p>День тижня 38 років тому: ${dayOfWeek38YearsAgo}</p>
    `;
}



function showDayOfWeekInFuture() {
    var inputDate = document.getElementById('inputFutureDate').value;
    var currentDate = new Date(inputDate);
    var result = getDayOfWeekInFuture(3, currentDate);
    document.getElementById('resultDayOfWeekInFuture').innerText = result;
}

function getDayOfWeekInFuture(years, inputDate) {
    var currentDate = inputDate || new Date();
    var futureDate = new Date(currentDate.getFullYear() + years, currentDate.getMonth(), currentDate.getDate());

    function getFormattedDate(date) {
        var day = ("0" + date.getDate()).slice(-2);
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var year = date.getFullYear();
        var dayOfWeek = date.toLocaleDateString('uk-UA', { weekday: 'long' });

        return `${day}.${month}.${year} буде ${dayOfWeek}`;
    }

    var result = `Через ${years} роки, ${getFormattedDate(futureDate)}`;
    return result;
}

function calculateTimeDifference() {
    var hour1 = parseInt(document.getElementById('hour1').value);
    var minute1 = parseInt(document.getElementById('minute1').value);
    var hour2 = parseInt(document.getElementById('hour2').value);
    var minute2 = parseInt(document.getElementById('minute2').value);

    if (isNaN(hour1) || isNaN(minute1) || isNaN(hour2) || isNaN(minute2)) {
        document.getElementById('resultTimeDifference').innerText = "Будь ласка, введіть коректні значення для годин і хвилин.";
        return;
    }

    var time1InSeconds = hour1 * 3600 + minute1 * 60;
    var time2InSeconds = hour2 * 3600 + minute2 * 60;

    var differenceInSeconds = Math.abs(time1InSeconds - time2InSeconds);

    var hoursDifference = Math.floor(differenceInSeconds / 3600);
    var minutesDifference = Math.floor((differenceInSeconds % 3600) / 60);

    var result = `Різниця між часом: ${hoursDifference} годин ${minutesDifference} хвилин.`;

    document.getElementById('resultTimeDifference').innerText = result;
}

function checkIfNumber() {
    var inputValue = document.getElementById('inputNumber').value;

    if (!isNaN(parseFloat(inputValue)) && isFinite(inputValue)) {
        document.getElementById('resultNumberCheck').innerText = "Введено число.";
    } else {
        document.getElementById('resultNumberCheck').innerText = "Введено не число.";
    }
}

function calculateNumber() {
    var inputDate = new Date(document.getElementById('inputDateCalc').value);

    if (isNaN(inputDate.getTime())) {
        document.getElementById('resultNumberSystems').innerText = "Некоректна дата.";
        return;
    }

    var day = inputDate.getDate();
    var month = inputDate.getMonth() + 1;
    var year = inputDate.getFullYear();

    var sum = day + month + year;

    var decimal = sum;
    var binary = sum.toString(2);
    var hexadecimal = sum.toString(16).toUpperCase();

    var result = `
        <p>Десяткова система: ${decimal}</p>
        <p>Двійкова система: ${binary}</p>
        <p>Шістнадцяткова система: ${hexadecimal}</p>
    `;

    document.getElementById('resultNumberSystems').innerHTML = result;
}

function calculateHypotenuse() {
    var sideA = parseFloat(document.getElementById('inputSideA').value);
    var sideB = parseFloat(document.getElementById('inputSideB').value);

    if (isNaN(sideA) || isNaN(sideB) || sideA <= 0 || sideB <= 0) {
        document.getElementById('resultHypotenuse').innerText = "Будь ласка, введіть коректні значення для обох катетів.";
        return;
    }

    var hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);
    hypotenuse = hypotenuse.toFixed(2);

    document.getElementById('resultHypotenuse').innerText = `Довжина гіпотенузи: ${hypotenuse}`;
}
