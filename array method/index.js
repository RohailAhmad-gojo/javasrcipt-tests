const items = [
    { name: "Bike", price: 100     },
    { name: "TV", price: 200       },
    { name: "Album", price: 10     },
    { name: "Book", price: 5       },
    { name: "Phone", price: 500    },
    { name: "Computer", price: 1000},
    { name: "keyboard", price: 25  },
];
//filter
const filteredItems = items.filter((item) =>{
    return item.price <= 100
});

console.log(filteredItems);

//map
const itemName = items.map((item) =>{
    return item.price + 10
});

console.log(itemName)

//find
const foundItem = items.find((item) => {
    return item.name === "Phone" 
});

console.log(foundItem);


//forEach
items.forEach((item,index) =>{
    console.log(`this are our porduct ${index} ${item.name} and prices ${item.price}`)
})

//some
const cheapItem = items.some((item) =>{
    return item.price <= 100
});

console.log(cheapItem);

//every
const cheapItems = items.every((item) =>{
    return item.price <= 100
});

console.log(cheapItems);

//reduce

const total = items.reduce((currentTotal,item) =>{
    return item.price + currentTotal
}, 0)

console.log(total)

const number = [1,2,3,4,5];

const includesTwo = number.includes(6)

console.log(includesTwo)