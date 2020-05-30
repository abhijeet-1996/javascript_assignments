function fun(){
    let price=0;
first=document.getElementById('b1');
if(first.checked){
price += parseInt(first.value);
}
sec=document.getElementById('b2');
if(sec.checked){
price += parseInt(sec.value);
}
third=document.getElementById('b3');
if(third.checked){
price += parseInt(third.value);
}
four=document.getElementById('b4');
if(four.checked){
price += parseInt(four.value);
}

document.getElementById('text').value = price;
}