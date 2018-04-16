let products = [];
products.push("Milk");
produtcs.push("Bread");
products.push("Banana");
products.push("Apples");
products.push("Coffee");
products.push("Pasta");
products.push("Meat");
products.push("Vegetables");


function test() {

    console.log(typeof products);

    let newProduct = document.getElementById("product").value;
    products.push(newProduct);

    document.getElementById("result").innerText = products;
     printProducts(products);
    //  let products = [];
}

function printProducts(products) {
    let h = "";
    h = h +"<ul>";
    for (let i = 0; i < products.length; i++) {
        h = h + "<li>" + products[i] + "</li>";
    }
    h = h + "</ul>";
    document.getElementById("result").innerHTML = h;
}