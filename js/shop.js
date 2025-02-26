// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    let found = false;

    for(let z = 0; z < cart.length; z++){
            if(cart[z].id === id){
            cart[z].quantity++;
            found = true;
            break;
            }
    } 
    
    if (!found) {
        for(let i = 0; i < products.length; i++){
            if(products[i].id === id){
                products[i].quantity = 1;
                cart.push(products[i]);
                break;
            }
        }
    }
    console.log(cart)
}

// Exercise 2
function cleanCart() {
    cart.length = 0;
    total = 0;
    console.log(cart)
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    applyPromotionsCart();
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        total += cart[i].price * cart[i].quantity;
    }
    console.log(`The total price is: ${total}`)
    return total;
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    // let subtotalWithDiscount = 0;
    for(let i = 0; i < cart.length; i++){
        if(cart[i].offer && cart[i].quantity >= cart[i].offer.number){
            let discount = cart[i].price * cart[i].quantity * (cart[i].offer.percent / 100);
            cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity - discount;
        } else {
            cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
        }
    }
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartList = document.getElementById('cart_list')

    let totalPrice = document.getElementById('total_price')

    cartList.innerHTML = '';

    let total = 0;

    applyPromotionsCart();

    cart.forEach(item => {
        let itemTotal = item.subtotalWithDiscount || item.price * item.quantity;
        total += itemTotal; 

        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${itemTotal}</td>
        `;

        cartList.appendChild(row);
    })

    totalPrice.innerHTML = total.toFixed(2);
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}