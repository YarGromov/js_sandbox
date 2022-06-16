class Rectangle {
  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  calcArea(){
    return this.width * this.height;
  }
}

 const square = new Rectangle(11, 10);

 console.log(square.calcArea())
