/* Задача 1
1. Создать шаблон объектов «Товар».
Свойства товара «Имя» и «Цена».
Создать шаблон объектов «Корзина товаров».
Приватные свойства объекта:
- Массив товаров;
- Количество товаров;
- Сумма товаров.
Методы объекта:
- Добавить товар;
- Вернуть сумму товара;
- Вернуть количество товара.*/

function Piece() {
  this.name = name;
  this.price = price;
}

function Pocket() {
  this._pieces = [];
  this._quantity = 0;
  this._totalPrice = 0;
  this.addPiece = function(newPiece) {
    this._pieces.push(newPiece);
    this._quantity++;
    this._totalPrice += newPiece.price;
  }

  this.getPrice = function() {
    return this._totalPrice;
  }

  this.getQuantity = function() {
    return this._quantity;
  }
}

var piece1 = new Piece("Chicken", 100);
var piece2 = new Pocket("Book", 150);
var piece3 = new Pocket("Pencil", 75);

var pocket = new Pocket();

pocket.addPiece(piece1);
pocket.addPiece(piece2);
pocket.addPiece(piece3);

console.log(pocket._piece);
console.log(pocket.getPrice());
console.log(cart.getQuantity());