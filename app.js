// set timeout
let timeOutDiv = document.getElementById('timeout-div');

document.getElementById('timeout').addEventListener("click", function () {
    setTimeout(function () {
       let div = document.createElement('div');
       div.style.width = '500px';
       div.style.height = '100px';
       div.style.backgroundColor = 'red';
       div.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !";
       timeOutDiv.appendChild(div);
    }, 2000);
});

// set timeinterval
let min = 0;
let intervalDiv = document.getElementById('interval-div');

document.getElementById('interval-start').addEventListener("click", function () {
    let intervalId = setInterval(function () {
        if (min < 600) {
            intervalDiv.innerHTML = min += 60;
        }
        else {
            document.getElementById('interval-stop').addEventListener("click", function () {
                clearInterval(intervalId);
            })
        }
    }, 60000);
});