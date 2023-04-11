var inputnumber = document.getElementById('inputNumber');
var convertbtn = document.getElementById('convertBtn');
var bfrom = document.getElementById('bfrom');
var btos = document.getElementById('bto');
var sp = document.getElementById('result');

convertBtn.addEventListener('click', function(){
    var num = +inputnumber.value;
    var fromb = +bfrom.value;
    var tob = +bto.value;

    num= num.toString();
    var result = parseInt(num,fromb).toString(tob);
    sp.textContent = result.toUpperCase();
})