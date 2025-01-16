/* 
-----abstraction-----
*/

class CoffeeMachine {
  start() {
    // call DB
    // filter value
    return `starting the machine...`;
  }

  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }

  pressStartButton() {
   return `${this.start()}\n${this.brewCoffee()}`;
  }
}

let myMachine = new CoffeeMachine();

// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());

console.log(myMachine.pressStartButton());

