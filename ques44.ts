function orderSandwiches(...items : string[]){
    console.log("Sandwich order:");
    for (let item of items) {
        console.log("-" + item);
    }

    console.log("Enjoy your Sandwitch!")
}

orderSandwiches ("Peperoni" , "Olives" , "Tomotoes" , "onions")
orderSandwiches ("Peperoni" , "Olives" , "Cheese" , "onions")
orderSandwiches ("Peperoni" , "Olives" , "Turkey" , "onions")
