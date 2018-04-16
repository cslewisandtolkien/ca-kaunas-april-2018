let cities = [];
// cities.push("Jonava");
// cities.push("Kaunas");
// cities.push("Vilnius");
// cities.push("Klaipeda");
// cities.push("Palanga");

// let h = "";
// for (let i = 0; i < cities.length; i++) {
//     // h= h + cities[i];
//     // console.log(cities[i]);   
//     console.log(i);
//     h = h + "<div><h3 class='prettyText'>" + cities[i] + "</h3></div>";
//     // document.getElementById("result").innerHTML = cities[i];
// }

// document.getElementById("result").innerHTML = h;

// console.log(cities);
// console.log(cities.toString());

function test() {
    // alert("funkcija aktyvi");

    console.log(typeof cities);
    // let cities = [];
    let newCity = document.getElementById("city").value;
    cities.push(newCity);

    document.getElementById("result").innerText = cities;
    // printCities(cities);
}

// function printCities(cities) {
//     let h = "";
//     for (let i = 0; i < cities.length; i++) {
//         console.log(i);
//         console.log(cities[i]);
//         h = h + "<div><h3 class='prettyText'>" + cities[i] + "</h3></div>";
//     }
//     document.getElementById("result").innerHTML = h;
// }