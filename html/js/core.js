function myFunction() {
    // Cambiar el texto

    document.getElementById('welcomeText').innerHTML = 'Miren como cambio el texto';

    var firstName = 'Enrique';
    var secondName = 'Antonio';
    var fullName = firstName + ' ' + secondName;

    var weight = 70;
    var clothesWeight = 2;
    var totalWeight = weight + clothesWeight;
    totalWeight = weight + 30;

    var alumns = 13;
    var alumnsToday = ++alumns;
    var num = 24 % 5;
    var num2 = alumns / num;
    var totalCost = ((2 * 4) * 2);
    //var alumnsNextClass = alumns * alumns;

    //alert(totalCost);
    //var numberOfCats = prompt("How many cats?");
}

//var question = prompt('What´s your favorite music band?', 'Maluma');
//alert(question);
//Imprimir resultado

/*
if (question === 'Kaloncho') {
    alert('Que mal gusto');
}
else if (question === 'Revolver Cannabis') {
    alert('Arriba plebes');
}
else {
    alert('Hay música más allá del reggeton');
}
*/


var age = prompt('What´s your age?');
var gender = prompt('What´s your gender?');
var band = prompt('What´s your band?');

if (age >= 18 && gender === 'male') {
    if (band === 'Maluma') {
        alert('Eres hombre y tienes mal gusto');
    }
    else {
        alert('Eres bien machin');
    }
}
else if (age >= 18 && gender === 'female') {
    if (band === 'Maluma') {
        alert('Eres mujer y tienes mal gusto');
    }
    else {
        alert('Eres una mujer con buen gusto');
    }
}
else {
    alert('Eres del tercer espiritú');
}
console.log('Tu edad es ' + age + ' tu género es ' + gender + ' y te gusta ' + band);

