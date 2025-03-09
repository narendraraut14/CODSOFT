let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
var input = document.getElementById('input');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'Del'){
            screen.value = screen.value.slice(0,-1)
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
