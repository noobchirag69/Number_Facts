window.onload = () => {
    document.querySelector('.numberInput').value = '';
}

let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactFetch);

// Fetch with XHR
function getFactAjax() {

    let number = numberInput.value;

    if (number != '') {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', `http://numbersapi.com/${number}`, true);

        xhr.onload = function () {
            if (this.status == 200) {
                fact.style.display = 'block';
                factText.innerText = this.responseText;
            }
        }

        xhr.send();
    } else {
        fact.style.display = 'none';
    }
}

// Fetch with Fetch API
function getFactFetch() {
    let number = numberInput.value;

    if (number != '') {
        fetch(`http://numbersapi.com/${number}`)
            .then(response => response.text())
            .then(data => {
                fact.style.display = 'block';
                factText.innerText = data;
            })
            .catch(err => console.log(err));
    } else {
        fact.style.display = 'none';
    }
}