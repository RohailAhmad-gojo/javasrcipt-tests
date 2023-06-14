const grade = prompt("what is my grade");

if (grade >= 80 && grade <= 100){
    console.log("you have A+");
}
else if(grade <= 80 && grade >= 70){
    console.log("you have A");
}
else if(grade <= 69 && grade >= 60){
    console.log("you have B");
}
else if(grade <=59 && grade >= 50){
    console.log("you have C"); 
}
else if(grade <= 50 && grade > 0){
    console.log("you have D")
}
else if(grade == null || grade == ""){
    console.log("No number was added");
}else{
    console.log('Invalid mark, outside range 0-100')
}



const animal = "";
switch(animal){
    case 'dog':
        console.log("dog are good");
        break
    case "cat":
        console.log ('car are good too');
        break
    case "loin":
        console.log("loin are danger animal")
        break
    case "loin":
        console.log("loin are danger animal")
        break
        default:
            console.log("Sorry, your animal is not on the list")
            break
}
// turnary operators
const number = 10;
console.log(id == 10 ? "id is 10" : "id is not 10")

const pass = false;
console.log(pass ? "you have passed": "you have failed")