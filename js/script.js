(function(){

    const btn = document.querySelector('button');
    const input = document.querySelector('input');
    const alert = document.getElementById('alert');
    const btnInput = document.getElementById('button2');
    const result = document.getElementById('result');
    const numResult = document.getElementById('numResult');
    let randomArray = [];


    btn.addEventListener('click', function(){

        displayNoneReset();
        randomNumbersArray();
        setTimeout(addDisplayNone, 3000);
    });

    btnInput.addEventListener('click', function(){
        let textInput = input.value;
        let split = textInput.split(' ');
        let numbers = split.map(Number);
        console.log(numbers);
        let i = 0;
        let amount = 0;
        let winner = [];
        let loser = [];

        while(i < 5){
            if(randomArray.includes(numbers[0])){
                let numWin = numbers.shift();
                winner.push(numWin);
                amount++;
            }else{
                let numLose = numbers.shift();
                loser.push(numLose);
            }
            
        i++
        }   
        console.log(amount);
        console.log(winner);
        console.log(loser);  
        result.style.color = 'white';
        result.style.fontWeight = 'bold';
        result.style.fontSize = '25px';
        numResult.style.color = 'white';
        numResult.style.fontWeight = 'bold';
        numResult.style.fontSize = '25px';
        numResult.innerText = winner;
        result.innerText = 'Hai inserito ' + amount + ' numeri giusti.'
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