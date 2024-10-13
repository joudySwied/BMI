const btn = document.getElementById('calculate');
btn.addEventListener('click',function(){
    let weight=document.querySelector('#weight').value;
    let height=document.querySelector('#hight').value;

    if (weight== '' || height=='' ){
        document.querySelector('.spaan').innerHTML = ' Enter your correct height and weight';
        return ;
    }
    height = height / 100 ;
    let bmi = (weight / (height * height));
    bmi= bmi.toFixed(2);
    document.querySelector('.spaan').innerHTML = " BMI =";
    document.querySelector('.spaan').innerHTML += bmi;

    let com = ' ..';

    if (bmi<18.5){
         com = 'underweight';
         document.querySelector('.discrebtion').src  = "./asset/images/1.jpg";
         document.querySelector('.spaan').style.color = "red";
         document.querySelector('.spaan2').style.color = "red";
    }
        else if (bmi>=18.5 && bmi < 25){
         com = 'healthy';
         document.querySelector('.discrebtion').src  = "./asset/images/2.jpg";
         document.querySelector('.spaan').style.color = "green";
         document.querySelector('.spaan2').style.color = "green";

    }
    else if (bmi>=25 && bmi<30){
         com = 'overweight';
         document.querySelector('.discrebtion').src  = "./asset/images/3.jpg";

    }
    else if (bmi>=30 && bmi < 35){
         com = 'oppps!';
         document.querySelector('.discrebtion').src  = "./asset/images/4.jpg";

    }
    else if (bmi>=35 ){
        com = 'your health is in danger ';
        document.querySelector('.discrebtion').src  = "./asset/images/5.jpg";
        document.querySelector('.spaan').style.color = "red";
        document.querySelector('.spaan2').style.color = "red";
    }
    document.querySelector('.spaan2').innerHTML = com;

}) 




