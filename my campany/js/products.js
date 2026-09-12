const PRODUCTS = [
 {id:1,name:"IWISA Maize Meal 10kg",category:"Groceries",price:80,rating:4.8,reviews:128,emoji:"🌾",sellers:[{name:"Seller A",price:80,stock:25,delivery:"2–3 days",rating:4.7},{name:"Seller B",price:84,stock:12,delivery:"1–2 days",rating:4.9},{name:"Seller C",price:79,stock:5,delivery:"3–5 days",rating:4.6}]},
 {id:2,name:"Coca Cola 2L",category:"Beverages",price:25,rating:4.7,reviews:96,emoji:"🥤",sellers:[{name:"Seller A",price:25,stock:18,delivery:"1–2 days",rating:4.8},{name:"Seller D",price:23,stock:8,delivery:"2–3 days",rating:4.5}]},
 {id:3,name:"Sunlight Soap 175g",category:"Household",price:18,rating:4.6,reviews:76,emoji:"🧼",sellers:[{name:"Seller B",price:18,stock:40,delivery:"2–3 days",rating:4.7},{name:"Seller C",price:17,stock:14,delivery:"3–5 days",rating:4.6}]},
 {id:4,name:"Omo Washing Powder 2kg",category:"Household",price:70,rating:4.7,reviews:64,emoji:"🧺",sellers:[{name:"Seller A",price:70,stock:10,delivery:"1–2 days",rating:4.8},{name:"Seller E",price:68,stock:4,delivery:"2–4 days",rating:4.6}]},
 {id:5,name:"Brown Bread",category:"Groceries",price:16,rating:4.5,reviews:52,emoji:"🍞",sellers:[{name:"Seller C",price:16,stock:12,delivery:"1–2 days",rating:4.5}]},
 {id:6,name:"Full Cream Milk 1L",category:"Groceries",price:24,rating:4.4,reviews:48,emoji:"🥛",sellers:[{name:"Seller B",price:24,stock:6,delivery:"1–2 days",rating:4.4},{name:"Seller D",price:22,stock:9,delivery:"2–3 days",rating:4.6}]},
 {id:7,name:"Samsung Galaxy A56",category:"Electronics",price:8699,rating:4.9,reviews:214,emoji:"📱",sellers:[{name:"Tech Seller",price:8699,stock:4,delivery:"1–2 days",rating:4.9},{name:"Mobile Hub",price:8999,stock:10,delivery:"2–3 days",rating:4.8},{name:"Digital Store",price:8799,stock:3,delivery:"3–5 days",rating:4.7}]},
 {id:8,name:"Everyday T-Shirt",category:"Fashion",price:199,rating:4.3,reviews:31,emoji:"👕",sellers:[{name:"Fashion Seller",price:199,stock:20,delivery:"2–4 days",rating:4.5},{name:"Local Wear",price:179,stock:8,delivery:"3–5 days",rating:4.2}]}
];

function money(n){return "R" + Number(n).toLocaleString("en-ZA",{minimumFractionDigits:2,maximumFractionDigits:2});}
function stars(r){return "★".repeat(Math.round(r)) + "☆".repeat(5-Math.round(r));}
function card(p){
 return `<article class="product-card">
   <button class="heart" onclick="event.stopPropagation(); alert('Wishlist will be connected later.')">♡</button>
   <a href="product.html?id=${p.id}" class="product-image"><span>${p.emoji}</span></a>
   <div class="product-info"><small>${p.category}</small><a class="product-name" href="product.html?id=${p.id}">${p.name}</a>
   <div class="rating"><span>${stars(p.rating)}</span> <small>${p.rating} (${p.reviews})</small></div>
   <strong class="price">From ${money(Math.min(...p.sellers.map(s=>s.price)))}</strong>
   <small>${p.sellers.length} seller${p.sellers.length>1?"s":""} · compare offers</small>
   <button class="add-btn" onclick="addToCart(${p.id},0)">🛒 Add lowest-price offer</button></div>
 </article>`;
}