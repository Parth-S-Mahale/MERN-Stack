function sayHello(){
    console.log("I would like to say Hello");
}

setTimeout(() => {
    sayHello();
}, 2000)

for (let index = 0; index < 10; index++) {
    console.log(index);
}

