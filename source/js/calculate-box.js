window.addEventListener("load", function() {
    
    function calculate_box(){

        let num_emp = document.querySelector("#num_emp > div.option-calc.active").innerText;
        let time_sea = document.querySelector("#time_sea > div.option-calc.active").innerText;
        let amount_rep = document.querySelector("#amount_rep > div.option-calc.active").innerText;
        let rep_per = document.querySelector("#rep_per > div.option-calc.active").innerText;

        switch (num_emp) {
            case '1':
                num_emp = 100;
                break;
            case '2-5':
                num_emp = 95;
                break;
            case '6-10':
                num_emp = 90;
                break;
            case '11-20':
                num_emp = 80;
                break;
            case '21-35':
                num_emp = 70;
                break;
            case '35+':
                num_emp = 60;
                break;
        }

        switch (time_sea) {
            case '< 7 Days':
                time_sea = 20;
                break;
            case '7 - 14 Days':
                time_sea = 0;
                break;
        }

        switch (amount_rep) {
            case '1':
                amount_rep = 0;
                break;
            case '2':
                amount_rep = 5;
                break;
            case '3':
                amount_rep = 10;
                break;
        }

        switch (rep_per) {
            case '2 Weeks':
                rep_per = 0;
                break;
            case '1 Month':
                rep_per = 10;
                break;
            case '2 Month':
                rep_per = 20;
                break;
            case '3 Month':
                rep_per = 30;
                break;
        }

        console.log(num_emp);
        console.log(time_sea);
        console.log(amount_rep);
        console.log(rep_per);

        document.getElementById('per_sal').innerText = (Number(num_emp)+Number(time_sea)+Number(amount_rep)+Number(rep_per)) + "%";

    }

    //Number Of Employees
    document.getElementById("num_emp").addEventListener("click", function(e) {
        // console.log(e.srcElement.innerText);

        if(e.srcElement.classList.value.includes('option-calc')){
            for(let i = 0; i < document.getElementById("num_emp").childElementCount; i++){
                document.getElementById("num_emp").children[i].classList.remove('active');
            }
    
            e.srcElement.classList.add('active');
    
            calculate_box();
        }
    });

    //Time Of Search
    document.getElementById("time_sea").addEventListener("click", function(e) {
        if(e.srcElement.classList.value.includes('option-calc')){
            for(let i = 0; i < document.getElementById("time_sea").childElementCount; i++){
                document.getElementById("time_sea").children[i].classList.remove('active');
            }

            e.srcElement.classList.add('active');

            calculate_box();
        }
    });

    //Amount Of Replacement
    document.getElementById("amount_rep").addEventListener("click", function(e) {
        if(e.srcElement.classList.value.includes('option-calc')){
            for(let i = 0; i < document.getElementById("amount_rep").childElementCount; i++){
                document.getElementById("amount_rep").children[i].classList.remove('active');
            }

            e.srcElement.classList.add('active');

            calculate_box();
        }
    });

    //Replacement Period
    document.getElementById("rep_per").addEventListener("click", function(e) {
        if(e.srcElement.classList.value.includes('option-calc')){
            for(let i = 0; i < document.getElementById("rep_per").childElementCount; i++){
                document.getElementById("rep_per").children[i].classList.remove('active');
            }

            e.srcElement.classList.add('active');

            calculate_box();
        }
    });

});