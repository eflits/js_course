// Задача 1
console.log('Задача 1:');
var A = [ 12, 4, 3, 10, 1, 20 ];
var B = [-3, -7, -100, -33];
var C = A.concat(B);
console.log(C);

// Задача 2
console.log('Задача 2 (см. html):');
var area = [1, 0, 0, 1, 0, 1, 1, 0, 1];
document.write("<div class=\"container\">");
for (var i = 0; i < area.length; i++) {
   if (area[i] === 0) {
     document.write("<div>0</div>")
   } else if (area[i] === 1) {
     document.write("<div>X</div>")
   } else document.write("<div>_</div>")
 }
document.write("</div>");

// Задача 3
console.log('Задача 3:');
var arr = [12,4,3,10,1,20];
var min = Math.min.apply(null, arr);
var max = Math.max.apply(null, arr);
var indexofmin = arr.indexOf(min);
arr.splice(indexofmin, 1);
var indexofmax = arr.indexOf(max);
arr.splice(indexofmax, 1);
console.log(arr);

// Задача 4
// Шейкерная сортировка. Она же сортировка перемешиванием, она же коктейльная сортировка.
//https://habr.com/post/204600/
// ЗАДАЧА НЕ ДОДЕЛАНА :(

console.log('Задача 4:');
var arr = [12,4,3,10,1,20];
var temp;

// Проходим слева направо, если элемент слева больще чем справа, то меняем местами
for (var i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i+1]) {
      temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
		}
  }
// Проходим справа налево, если элемент справа меньше, чем слева, то меняем местами
for (var j = arr.length-1; j > 0; j--) {
    if (arr[j] < arr[j-1]) {
  			temp = arr[j];
  			arr[j] = arr[j-1];
  			arr[j-1] = temp;
      }
    }

console.log(arr);
