function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

const sqr = new Square(2, 3, 2, 3);

Square.prototype.isSquare = function() {
    if(this.a === this.c && this.b === this.d) {
      return true;
    } else {
      return false;
    }
}

console.log(sqr.isSquare());