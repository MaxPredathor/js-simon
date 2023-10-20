(function(){

    const btn = document.querySelector('button');
    const input = document.querySelector('input');
    const alert = document.getElementById('alert');
    const btnInput = document.getElementById('button2');
    let randomArray = [];
    let inputArray = [];


    btn.addEventListener('click', function(){

        displayNoneReset();
        randomNumbersArray();
        setTimeout(addDisplayNone, 3000);
    });

    btnInput.addEventListener('click', function(){
        let inputValue = input.value;
        inputArray.push(inputValue);
        console.log(inputArray);

        let i = 0;
        while(i < 5){
            inputArray[0].split(" ");
            console.log(inputArray);
            inputArray.map(Number);
            console.log(inputArray);

        i++
        }           
    });

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function randomNumbersArray(){
        let num;
        let i = 0;
        while(i < 5){
            num = getRndInteger(1, 100);
            randomArray.push(num);
        i++
        }
        alert.style.color = 'white';
        alert.style.fontWeight = 'bold';
        alert.style.fontSize = '25px';
        alert.innerText = randomArray;
        console.log(randomArray);
    }
    
    function addDisplayNone(){
        alert.classList.add('d-none');
        input.classList.remove('d-none');
        btnInput.classList.remove('d-none');
        btn.classList.add('d-none');

    }

    function displayNoneReset(){
        alert.classList.remove('d-none');
        input.classList.add('d-none');
        btnInput.classList.add('d-none');
        btn.classList.remove('d-none');
    }

}) ();