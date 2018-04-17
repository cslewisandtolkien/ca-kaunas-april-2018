let miestai = ["New York", "Berlin", "Oslo", "Riga", "Moscow", "Rome"]

// function check(){
//     let miestai = [];
//     let a = miestai.indexOf("");

//     document.getElementById("result").innerHTML = a;
// }

function check(){
    let city = document.getElementById("city").value;
    console.log(city);

    let cityFound = "";
    if(miestai.indexOf(city) > -1){
        cityfound = "Toks miestas yra";}
        else{
            cityfound = "Tokio miesto nera";
        }
    
document.getElementById("result").innerHTML = "<h3>"+cityFound+"</h3>";
}

