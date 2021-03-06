// Задача 1
var x = 5;
var y = 7;

if (x < y) {
  a = x;
  b = y;
} else {
    a = y;
    b = x;
};
x = a;
y = b;
console.log("x = ", x, " y = ", y);

// Задача 2
var a = [0, 3, 0];
var b = [3, 0, 0];
var c = [0, 0, 0];

var absquare = (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;
var acsquare = (a[0] - c[0]) ** 2 + (a[1] - c[1]) ** 2 + (a[2] - c[2]) ** 2;
var bcsquare = (b[0] - c[0]) ** 2 + (b[1] - c[1]) ** 2 + (b[2] - c[2]) ** 2;
var giposquare = Math.max(absquare, bcsquare, acsquare);
var prtr = absquare + acsquare === Math.round(giposquare) || acsquare + bcsquare === Math.round(giposquare) ||  absquare + bcsquare === Math.round(giposquare);
if (prtr){
  console.log("Треугольник прямоугольный")
} else {
  console.log("Треугольник не прямоугольный")
}

// Задача 3
var month = prompt('Введите номер месяца');

while (month < 1 || month > 12) {
    var month = prompt('Введите номер месяца (1-12)')
};

switch(month) {
  case '12':
	case '1':
  case '2':
		console.log('Зима');
		break;
  case '3':
  case '4':
  case '5':
    console.log('Весна');
    break;
  case '6':
  case '7':
  case '8':
    console.log('Лето');
    break;
  case '9':
  case '10':
  case '11':
    console.log('Осень');
    break;
}

// Задача 4
var items = prompt('Выберите единицу измерения (1,2,3,4,5):\n1-Дециметр;\n2-Километр;\n3-метр;\n4-Миллиметр;\n5-Сантиметр');

while (items < 1 || items > 5) {
    var items= prompt('Выберите единицу измерения (1,2,3,4,5):\n1-Дециметр;\n2-Километр;\n3-метр;\n4-Миллиметр;\n5-Сантиметр')
};

var length = parseFloat(prompt('Введите длину отрезка:'));
switch(items) {
  case '1':
    length = length * 0.1;
    break;
  case '2':
    length = length * 1000;
    break;
  case '3':
    break;
  case '4':
    length = length * 0.001;
    break;
  case '5':
    length = length * 0.01;
    break;
};
console.log('Длина ' + length + ' м');

// Задача 5
var phrase = prompt('Введите строку:');

phrase = String(phrase);
phrase = phrase.replace(/\s/g, '');
phrase = phrase.toLowerCase();

phrasereversed = phrase.split('').reverse().join('');
if (phrase === phrasereversed) {
  alert('Это палиндром!');
} else
  alert('Не палиндром!');

// Задача 6
var year = prompt('Введите год (н.э.):');

if (year % 100 !== 0 && year % 4 === 0) {
  alert(year + '-й год - високосный!')
} else if (year % 400 === 0) {
  alert(year + '-й год - високосный!')
} else alert(year + '-й год - не високосный!');

// Задача 7
var plates = parseInt(prompt('Количество тарелок, шт.:'));
var fairy = parseFloat(prompt('Количество моющего средства:'));

while (plates > 0 && fairy >= 0.5) {
  plates = plates - 1;
  fairy = fairy - 0.5;
};

if (plates === 0 && fairy > 0) {
  console.log(`Все тарелки вымыты. Осталось ${fairy} ед. моющего средства`);
} else if (plates > 0 && fairy < 0.5) {
  console.log(`Моющее средство закончилось. Осталось ${plates} тарелок`)
} else if (plates === 0 && fairy === 0) console.log('Все тарелки вымыты, моющее средство закончилось');
