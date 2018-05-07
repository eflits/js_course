// Задача 1
var str = '123456';
strnum = str.split('');

for (var i = 0, sum = 0; i < str.length; i++){
    strnum[i] = +strnum[i];
    sum = strnum[i] + sum};

console.log(sum);

// Задача 2
var s = 'Дана строка S и символ C. Удвоить каждое вхождение символа C в строку S.';
var c = 'C';

var str = s.replace(new RegExp(c, 'g'), c+c);

console.log(str);

// Задача 3
var password = prompt('Введите пароль:');
var reg = /(?=.*[0-9]{2,})(?=.*[!$#%])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{9,}/;

console.log(reg.test(password));
