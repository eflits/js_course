/* Задачи

1.
Из трех данных чисел выбрать наименьшее.
*/

nums = [1, 3, 7];

var numsmin = Math.min.apply(null, nums);

console.log(numsmin);

/* 2.
Дано целое число, лежащее в диапазоне от -999 до 999.

Вывести строку - словесное описание данного числа вида

"отрицательное двузначное число",
"нулевое число",

"положительное однозначное число" и т.д.
*/

var num = parseInt(prompt('Введите число'));
var numstr = String(num);

if (num > 0) {
	if (numstr.length === 3) {
	numsymb = "Трехзначное";
} else if (numstr.length === 2) {
	numsymb = "Двузначное";
} else
	numsymb = "Однозначное";
} else if (num < 0) {
	if (numstr.length === 4) {
	numsymb = "Трехзначное";
} else if (numstr.length === 3) {
	numsymb = "Двузначное";
} else
	numsymb = "Однозначное";
}

if (Math.sign(num) === 1) {
	numsymb = numsymb + " положительное";
} else if (Math.sign(num) === -1) {
	numsymb = numsymb + " отрицательное";
} else if (Math.sign(num) === 0) {
	numsymb = "Нулевое число";
}
	console.log(numsymb);

/* 3.
Дано целое число в диапазоне
0 - 9.

Вывести строку - название соответствующей цифры
на русском языке
(0 - "ноль", 1 - "один", 2 - "два", ...)
*/

var numname = ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
var num = prompt('Введите число');
var numname = numname [num];

console.log(numname);

/* 4.
Дано целое число в диапазоне 1 - 5.
Вывести
строку - словесное описание соответствующей
оценки
(1 - "плохо",
2 - "неудовлетворительно",

3 - "удовлетворительно",
4 - "хорошо",
5 - "отлично").
*/

var numname = ["плохо", "неуд", "уд", "хор", "отл"];
var num = prompt('Введите число от 1 до 5');
var numname = numname [num-1];
console.log(numname);

/* 5.
Проверить истинность высказывания:

"Среди трех данных целых чисел есть хоть
бы одна пара совпадающих"
Требуется вывести логическое значение True,
если
приведенное высказывание для предложенных исходных
данных
является истинным, и значение False в противном случае.
*/

var num1 = parseInt(prompt('Введите число 1'));
var num2 = parseInt(prompt('Введите число 2'));
var num3 = parseInt(prompt('Введите число 3'));

if (num1 === num2 || num2 === num3 || num1 === num3) {
console.log('True');
} else
console.log('False');
