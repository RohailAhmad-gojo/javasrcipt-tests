//for
const ary = [1,2,3,4,5,6,7];

for(let i= 0; i<ary.length; i++){
    console.log(ary[i])
};

//while
let name = ["tom","john","abcd"];

let i = 0

while (i < name.length) {
    console.log(name[i])
    i++
}


//do while
let user = ["john","doe","tom","tim"];

let e = 0;
do{
    console.log(user[e]);
    e++
}
while(e<user.length)

let r = 0

while(r<=100){
    console.log(r);
    r= r+10
}

let age ={
    tim: 23,
    jack: 43,
    tom: 34,
    john: 56
}
for (let a in age){
    console.log(a+age[a])
}