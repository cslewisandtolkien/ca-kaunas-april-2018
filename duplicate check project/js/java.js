let colors = ["red", "green", "blue"];
colors.push("red");
colors = clearDuplicates(colors);
console.log(colors);


function clearDuplicates(colors) {
    // let colors_filtered = [];
let unique_color_list = [];

// let color_list = "black, blue, yellow";
// let colors_split = color_list.split(',');


    for (let i = 0; i < colors.length; i++) {
        if(unique_color_list.indexOf(colors[i]) == -1){
            unique_color_list.push(colors[i]);
        }
    }
    return unique_color_list;
}

// colors.indexOf(delete_word);

// colors.splice(x,1);


function deleteColor(color, colors) {
    let x = colors.indexOf(color);
    colors.splice(x, 1);
    return colors;
}

let colors2 = ["black", "blue", "yellow"];

//pop
//slice()
//split()
//slice()
//indexOf()
//toString()

