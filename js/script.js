(function(){

    const btn = document.querySelector('button');
    const input = document.querySelector('input').value;
    const alert = document.getElementById('alert');


    btn.addEventListener('click', function(){

        removeDisplayNone();
        myCicle();
        setTimeout(addDisplayNone, 3000);
    });





    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function myCicle(){
        let num;
        let inputArray = [];
        let i = 0;
        while(i < 5){
            num = getRndInteger(1, 100);
            inputArray.push(num);
        i++
        }
        alert.innerText = inputArray;
        console.log(inputArray);
    }
    function addDisplayNone(){
        alert.classList.add('d-none');
    }

    function removeDisplayNone(){
        alert.classList.remove('d-none');
    }

}) ();