/*  
-----Polymorphism-----
*/

class Bird{

    fly(){
        return `Flying...`;
    }
}

class Penguin extends Bird{

    fly(){
        return `Penguins can't fly`;
    }
}

let bird = new Bird();
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly());

