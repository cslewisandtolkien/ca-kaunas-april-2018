let product_array = [];
product_array.push("Milk");
product_array.push("Bread");
product_array.push("Banana");
product_array.push("Apples");
product_array.push("Coffee");
product_array.push("Pasta");
product_array.push("Meat");
product_array.push("Vegetables");


function test() {

    console.log(typeof product_array);

    let newProduct = document.getElementById("product").value;
    product_array.push(newProduct);

    let rasta_dublikatu = false;

rasta_dublikatu = checkForDuplicates(newProduct, product_array);

if(rasta_dublikatu == false){
    product_array.push(newProduct);
}
else{
    alert("Reiksme jau egzistuoja");
}

    // document.getElementById("result").innerText = product_array;
     printProducts(product_array);
    //  let products = [];
}

function printProducts(product_array) {
    let h = "";
    h = h +"<ul>";
    for (let i = 0; i < product_array.length; i++) {
        h = h + "<li>" + product_array[i] + "</li>";
    }
    h = h + "</ul>";
    document.getElementById("result").innerHTML = h;
}

function checkForDuplicates(newProduct, product_array){
    let found = false;
    for (let i = 0; i < product_array.length; i++){
        if(product_array[i] == newProduct){
        found = true;  
        }
    }
    return found;
}