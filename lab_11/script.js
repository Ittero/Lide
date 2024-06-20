function editPassword(password, messageId, minLength, maxLength) {
    var password = document.getElementById(password);
    var message = document.getElementById(messageId);

    if (password.value.length < minLength) {
        message.innerText = 'Надійний пароль повинен містити не менше ' + minLength + ' символів';
        message.className = 'message-error';
    } else if (password.value.length > maxLength) {
        message.innerText = 'Довжина паролю не повинна перевищувати ' + maxLength + ' символів';
        message.className = 'message-error';
    } else {
        message.innerText = 'Ok';
        message.className = 'message-ok';
    }
}


var streetsGal = ['Галицька', 'Ставропігійська', 'Краківська', 'Театральна', 'Вірменська'];
var streetsShev = ['Чорновола', 'Остряниці', 'Замарстинівська', 'Топольна', 'Варшавська'];
var streetsFran = ['Сахарова', 'Наукова', 'Княгині Ольги', 'В.Великого'];
var streetsLych = ['Личаківська', 'Пекарська', 'Нечуя-Левицького', 'Зелена'];
var streetsSykh = ['Хоткевича', 'Червоної Калини'];

var streetsAll = [null, streetsGal.sort(), streetsFran.sort(), streetsLych.sort(), streetsSykh.sort(), streetsShev.sort()];

function showStreets(regionIndex, selectId) {
    var streetsSelect = document.getElementById(selectId);
    clearSelect(streetsSelect);
    if (regionIndex <= 0) {
        streetsSelect.style.visibility = 'hidden';
        return;
    }

    streetsSelect.style.visibility = 'visible';

    for (var i = 0; i < streetsAll[regionIndex].length; i++) {
        var newStreet = new Option(streetsAll[regionIndex][i], streetsAll[regionIndex][i]);
        streetsSelect.add(newStreet, i);
    }
}

function clearSelect(selectObject) {
    while (selectObject.length) {
        selectObject.remove(0);
    }
}


function zoomMap(zoom, imageId) {
    var karta = document.getElementById(imageId);
    var areas = document.getElementsByName("map")[0].areas;

    for (var i = 0; i < areas.length; i++) {
        var coords = (areas[i].coords).split(',');
        for (var j = 0; j < coords.length; j++) {
            coords[j] = Math.round(coords[j] * zoom);
        }
        areas[i].coords = coords.join(',');
    }

    karta.width = Math.round((karta.width) * zoom);
    karta.height = Math.round((karta.height) * zoom);
}

function getTotalPrice() {
var sum = 0;
var boxes = document.getElementsByName('goods');
var selectedCount = 0;

for (var i = 0; i < boxes.length; i++) {
if (boxes[i].checked) {
   sum += parseFloat(boxes[i].value);
   selectedCount++;
}
}

document.getElementById('price').innerText = selectedCount < 5 ? 'Вибрано замало прапорців (мінімум 5)' : sum;
displayMessage(selectedCount, sum);
}

function assignFunctionToCheckboxes() {
var boxes = document.getElementsByName('goods');

for (var i = 0; i < boxes.length; i++) {
boxes[i].onclick = getTotalPrice;
}
}

function displayMessage(selectedCount, sum) {
var messageElement = document.getElementById('price');

if (selectedCount < 5) {
messageElement.innerText = 'Вибрано замало прапорців (мінімум 5)';
messageElement.style.color = "red";
} else {
messageElement.innerText = sum; // Use the passed sum parameter
messageElement.style.color = "green";
}
}

// Викликати цю функцію при завантаженні сторінки
assignFunctionToCheckboxes();
