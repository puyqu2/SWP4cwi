export default class Car {
    
  constructor(color, brand, horsePower) {
    this.color = color;
    this.brand = brand;
    this.horsePower = horsePower;
  }

  printSpecs(){
      console.log(this.color + " -- " + this.brand + " -- " + this.horsePower );
  }
}
