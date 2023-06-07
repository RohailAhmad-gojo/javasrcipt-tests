// let number = Number("34");
// console.log(number ,(typeof number));

// let text = Boolean('texting');
// console.log(text, (typeof text));

// let font = Array('this is just a text anything more');
// console.log(font, (typeof font));

// let date = String(new Date());
// console.log(date ,(typeof date));

// let arr = String([1,2,3,4,5]);
// console.log(arr.length ,(typeof arr));

// let type = String(56);
// console.log(type ,(typeof type));

// let decimal = Number(56.5487);
// console.log(decimal.toFixed(2) ,(typeof decimal));

// let ture = Boolean(0);
// console.log(ture, (typeof ture));

// let add = Number("43");
// let addAga = 12;
// console.log(add+addAga, (typeof add));

// let ram = parseInt(Math.random()* 100 + 1)
// console.log(ram)

// let run = Math.round(1.9)
// console.log(run)

// let q = 1;
// let p = "1";
// let qp = q===p;
// console.log(qp);



const name = "john";
const age = 21;
const city = "moscow"

let user = `
    <ul>
        <li>Name : ${name}</li>
        <li>age : ${age}</li>
        <li>city : ${city}</li>
    </ul>
    `

document.body.innerHTML=user;
console.log(String(user).split("</li>"))