let products=[
    {
        id:1,
        name:"mobile",
        price:25000,
        rating:7
    },
    {
        id:2,
        name:"TV",
        price:35000,
        rating:8
    },
    {
        id:3,
        name:"Watch",
        price:2000,
        rating:7.5
    },
    {
        id:4,
        name:"Fridge",
        price:30000,
        rating:6
    },
    {
        id:5,
        name:"Laptop",
        price:60000,
        rating:9.2
    }
]
products.forEach((e,i,arr)=>{
    console.log(e.name);
})

products.map((e,i,arr)=>{
    console.log(e.price);
    console.log(i);    
    console.log(arr);
})


let productPrice=products.filter(e=>e.price>100 && e.price<35000)
console.log(productPrice);

let productId=products.filter(e=>e.id>2 && e.id<5)
console.log(productId);

let productRating=products.filter((e,i,a)=>{
    if(e.rating>5&&e.rating<8)
        return e
})
console.log(productRating);
