    document.addEventListener('DOMContentLoaded', () => {
        const burger = document.querySelector('.menu-burger');
        const navLinks = document.querySelector('.navbar ul');

        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    });

    // Функція перевірки числа
    function checkSymbol(event) {
        var kc = event.keyCode;
        if(kc < 48 || kc > 57)
            return false;
        return true;
    }

    // Функції контекстного меню
        
    function showCustomMenu(sign, x, y) {
        var cm = document.getElementById("custommenu");
        if (sign) {
            cm.style.visibility = 'visible';
            cm.style.left = (x + window.pageXOffset) + 'px';
            cm.style.top = (y + window.pageYOffset) + 'px';
        } else {
            cm.style.visibility = 'hidden';
        }
        cm.style.position = 'absolute';
    }
    
        
        function doAction(actionType) {
            switch(actionType) {
                case "copy":
                    var text = document.body.innerText;
                    navigator.clipboard.writeText(text).then(function() {
                        alert('Текст скопійовано до буферу обміну');
                    }, function(err) {
                        alert('Помилка при копіюванні тексту: ', err);
                    });
                    break;
                case "close":
                    window.close();
                    break;
                case "fontIncrease":
                    document.body.style.fontSize = "20pt";
                    break;
                case "fontDecrease":
                    document.body.style.fontSize = "10pt";
                    break;
                case "changeBkg":
                    document.body.style.backgroundColor = "lightgrey";
                    break;
            }
        }
        