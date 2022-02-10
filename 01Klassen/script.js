class Car {
    horsePower = 120;
  constructor(color, brand, country= "Deutschland") {
    this.color = color;
    this.brand = brand;
    this.country = country;
  }

  printSpecs(){
      console.log(this.color + " -- " + this.brand + " -- " + this.horsePower + " -- " + this.country);
  }
}



let c1 = new Car("red", "Ferrari", "Italien")
let c2 = new Car("black", "Audi")
c1.printSpecs();
c2.printSpecs();