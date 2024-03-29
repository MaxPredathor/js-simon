(function(){

    const btn = document.querySelector('button');
    const input = document.querySelector('input');
    const alert = document.getElementById('alert');
    const btnInput = document.getElementById('button2');
    const result = document.getElementById('result');
    const numResult = document.getElementById('numResult');
    const numResult2 = document.getElementById('numResult2');
    const numResult3 = document.getElementById('numResult3');
    const numResult4 = document.getElementById('numResult4');
    const numResult5 = document.getElementById('numResult5');
    let randomArray = [];

    // Button wich generates 5 random number so that the user can remember them
    btn.addEventListener('click', function generateNumbers(){

        displayNoneReset();
        randomNumbersArray();
        setTimeout(addDisplayNone, 3000);
        btn.removeEventListener('click', generateNumbers)

    });
    // Second Button wich allow the user to insert his 5 input and then check if 
    // the user's input are correct and display them if so.
    btnInput.addEventListener('click', function userInput(){
        let textInput = input.value;
        let split = textInput.split(' ');
        let numbers = split.map(Number);
        let amount = 0;
        let winner = [];
        let loser = [];
        let numPop;
        let numPop2;
        let numPop3;
        let numPop4;
        let numPop5;
        let i = 0;

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
        
        if(amount === 5){          
            numPop = winner.shift();
            numPop2 = winner.shift();
            numPop3 = winner.shift();
            numPop4 = winner.shift();
            numPop5 = winner.shift();
            numResult.innerText = numPop;
            numResult2.innerText = numPop2;
            numResult3.innerText = numPop3;
            numResult4.innerText = numPop4;
            numResult5.innerText = numPop5;
        }else if(amount === 4){
            numPop = winner.shift();
            numPop2 = winner.shift();
            numPop3 = winner.shift();
            numPop4 = winner.shift();
            numResult.innerText = numPop;
            numResult2.innerText = numPop2;
            numResult3.innerText = numPop3;
            numResult4.innerText = numPop4;
        }else if(amount === 3){
            numPop = winner.shift();
            numPop2 = winner.shift();
            numPop3 = winner.shift();
            numResult.innerText = numPop;
            numResult2.innerText = numPop2;
            numResult3.innerText = numPop3;
        }else if(amount === 2){
            numPop = winner.shift();
            numPop2 = winner.shift();
            numResult.innerText = numPop;
            numResult2.innerText = numPop2;
        }else{
            numPop = winner.shift();
            numResult.innerText = numPop;
        }
          
        result.classList.add('fw-bold', 'text-light', 'fs-3');
        numResult.classList.add('fw-bold', 'text-light', 'fs-3', 'px-3');
        numResult2.classList.add('fw-bold', 'text-light', 'fs-3', 'px-3');
        numResult3.classList.add('fw-bold', 'text-light', 'fs-3', 'px-3');
        numResult4.classList.add('fw-bold', 'text-light', 'fs-3', 'px-3');
        numResult5.classList.add('fw-bold', 'text-light', 'fs-3', 'px-3');
        result.innerText = 'Hai inserito ' + amount + ' numeri giusti.'
        btnInput.removeEventListener('click', userInput);
    });
    
    // function that generates 5 unique random numbers and push them into an array
    function randomNumbersArray(){
        let num;
        let i = 0;
        while(i < 5){
            num = getRndInteger(1, 100);
            if(randomArray.includes(num)){
                console.log('prevented');

            }else{
                randomArray.push(num);
                i++;
            }
        }
        alert.classList.add('fw-bold', 'text-light', 'fs-3');
        alert.innerText = randomArray;
        console.log(randomArray);
    }

    // Utilities
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
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