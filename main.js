var time = +prompt('Введите время')

if ((time) >= 0 && (time) <= 6) {
    console.log(alert((time) + ' часов ночи'));  
}
else if ((time) >= 7 && (time) <= 10) {
    console.log(alert((time) + ' часов утра'));
    
}
else if ((time) >= 11 && (time) <= 17) {
    if(time == 13) console.log(alert('1 час дня'));
    if(time == 14) console.log(alert('2 часа дня'));
    if(time == 15) console.log(alert('3 часа дня'));
    if(time == 16) console.log(alert('4 часа дня'));
    if(time == 17) console.log(alert('5 часа дня'));
    
    
}else if ((time) >= 18 && (time) <= 23) {
    if((time) == 18)console.log(alert('6 часов вечера'))
    if((time) == 19)console.log(alert('7 часов вечера'))
    if((time) == 20)console.log(alert('8 часов вечера'))
    if((time) == 21)console.log(alert('9 часов вечера'))
    if((time) == 22)console.log(alert('10 часов вечера'))
    if((time) == 23)console.log(alert('11 часов вечера'))  
}