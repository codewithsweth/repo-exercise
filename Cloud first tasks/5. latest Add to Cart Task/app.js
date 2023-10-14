'use strict';
const productEl = document.querySelector('.products');
const cartItemsEl = document.querySelector('.cart-items');
const subtotalEl = document.querySelector('.subtotal');
const totalItemsInCartEl = document.querySelector('.total-items-in-cart');
const cartEl = document.querySelector('.mainModal');
const openCart = document.querySelector('.show-modal');
const closeCart = document.querySelector('.close-modal');
const overlay = document.querySelector('.customOverlay');

// openModal function
const openModal = function () {
  cartEl.classList.remove('hiddenModal');
  overlay.classList.remove('hiddenModal');
};

// closeModal function
const closeModal = function () {
  cartEl.classList.add('hiddenModal');
  overlay.classList.add('hiddenModal');
};
openCart.addEventListener('click', openModal);
closeCart.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////
// Step 1 render products in innerHTML using data from products array
function renderProducts() {
  // below products is a array from JS file and we are trying to loop that array so we can gain access to individual array element
  // in the forEach {product is a single element in the array}
  products.forEach(product => {
    // what the innerHTML should be adding and we use += to not overwrite the existing innerHTML and add in the next
    productEl.innerHTML += `
    <div class="item">
        <div class="item-container">
          <div class="item-img">
            <img src="${product.imgSrc}" alt="${product.name}" />
          </div>
          <div class="desc">
            <h2>${product.name}</h2>
            <h2><small>$</small>${product.price}</h2>
            <p>
              ${product.description}
            </p>
            <div class="add-to-cart" onClick="addToCart(${product.id});openModal();goToTop()">
              <img src="./icons/bag-plus.png" alt="add to cart" />
            </div>
          </div>
        </div>
    </div>
    `;
  });
}
// call the above function this will render all the array elements in webpage
renderProducts();

// Step 2 When clicked on add to cart, add an element to the cart in the modal
// to do that we need to first add an onClick event to 'img' in div.add-to-cart element in the above innerHTML
// Once you created an onclick function with name addToCart(). But the function needs to know what is the product that will add to the cart. To do this we pass in "product.id" from the products array
// now we will create that function below using function declaration
let cart = JSON.parse(localStorage.getItem('CART')) || [];
updateCart();
function addToCart(id) {
  if (cart.some(item => item.id === id)) {
    // alert('product already in the cart');
    changeNumberOfUnits('plus', id); ////
  } else {
    console.log(id); // with this code u get the id values of products after add button is pressed the id shpuld be shown in console
    // we need to find a way to save the above id's product in something and here we can use array to store that values
    // Now we created an empty array before the function and now its time to push the value into the array
    // Now lets save that object to the empty cart array to that we need to find the id's object in products arr
    const item = products.find(product => product.id === id);
    console.log(item); // this will give the array object with all its value whose name is t shirt 1 & id 0 as I clicked on the first
    // Now we need to save the above item in the new cart array
    // cart.push(item); /// Instead of the pushing the item with this property we use the one below In the page we can see no of units this number of units is a new property that will be added to the projects object to do that I added a new property called number of units
    cart.push({
      ...item,
      numberOfUnits: 1,
    }); //// now we can see the numberOfUnits in the array in console
    console.log(cart); // now with this we can see the products we clicked in the cart array
    // But there is a problem here as if I press item 1 twice I get two item1 objects in the array But we dont want that
    // so we need to use a condition to make add only if the product is not present in the cart. For this I used if statement above with condition  . THe if statement above defines: Check if one of the elements inside my cart array has the same id That means that the product is already in the cart
    // And the code after if statement is sent into else block
  }
  ////
  //// now we need a way to increase numberOfunits if I press + and vice verse and I also dont need that alert instead we need to increase the units cart
  //// for that lets call a new function "updateCart"
  updateCart();
}
function updateCart() {
  //// first rendering the cart items
  renderCartItems();
  //// second render the total value of products in the cart
  renderSubtotal();
  //// // the below one has 2 inputs 1)key:'CART' we need a key because when we get an item we need to specify the same key to get back our cart. 2)value: 'cart' cart itself
  //// //JSON.stringify saves cart as not an array instead as a string
  localStorage.setItem('CART', JSON.stringify(cart));
  //// // but these do not show result as u have this in local storage But not on cart .So now we just need to get back the cart from local storage .To get this assign the cart above to localStorage.getItem('CART') CART is the key
  // But Now it will not work as you can converter the cart array to string but we need array to store the items so need to do it like this JSON.parse(localStorage.getItem("CART"));
}
//// renderCartItems
function renderCartItems() {
  // // theory same as for above task
  cartItemsEl.innerHTML = '';
  cart.forEach(item => {
    cartItemsEl.innerHTML += `
    <div class="cart-item">
    <div class="item-info" onClick="removeItemFromCart(${item.id})">
      <img src="${item.imgSrc}" alt="${item.name}" />
      <h4>${item.name}</h4>
    </div>
    <div class="unit-price" style="font-size:2rem;"><small>$</small>${item.price}</div>
    <div class="units">
      <div class="btn minus" onClick="changeNumberOfUnits('minus',${item.id})">-</div>
      <div class="number">${item.numberOfUnits}</div>
      <div class="btn plus" onClick="changeNumberOfUnits('plus',${item.id})">+</div>
    </div>
  </div>
    `;
    // //But with the above event the products are selected in this fashion "press1---1""press2---1,2""press3---1,2,3" but we want "press---1""press2---2""press3---3"
    // // so whats heppening here is when I call this for each method I will not override cart elements as I am using "+=". TO fix this we go and clear cartitemsin inner html before the cart.forEach this will clear cart elements
    // //Next we need to add functionality to + and  - to do that we add onclick functions to btn minus and btn-plus in the above template. This function lets call it changeNumberOfUnits() same function for plus as well
    // // Now this function needs two things (1)action 2)what items should it change the number of units) The action is 'minus' and the item is ${item.id} so when O press on plus and minus I will change the number of units. Now lets create the function
  });
}
// //1st parameter is action and 2nd one is id of the item I want to change
function changeNumberOfUnits(action, id) {
  // //but doing it using the old way is a pain so we use MAP method. This map method will run this function in every element in my cart and then it will give a new updated array and lets store that in new cart
  cart = cart.map(item => {
    let numberOfUnits = item.numberOfUnits;
    // //return item;////this will just do nothing and return the items but what I need is different I need it to change the number of units
    // //we use if because in the cart we have multiple items and to select the item we pressed(+or-) that item should only react
    // //so I am going to creat a new variable "numberOfUnits and assign it the new value"
    if (item.id === id) {
      if (action === 'minus' && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === 'plus' && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits,
    };
  });
  // //after I have changed the cart array I need to update the cart to see the changes in user array

  updateCart();
  //// but after this there are few problems like the number of units go to minus and and the instock if just 5 but it have option for more we need to change this
  // for minus if can avoid it by adding numberOfUnits > 1
  // and for instock we can do that by adding
  // Next after this I dont want this alert in cart I want to increment units in the cart. TO do that go the addToCart function and in if statement add changeNumberOfUnits function
}
// // renderSubtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;
  cart.forEach(item => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  subtotalEl.innerHTML = `Subtotal (${totalItems} items): ${totalPrice.toFixed(
    2
  )}`;
  totalItemsInCartEl.innerHTML = totalItems;
}
// // in above we add the numbers in subtotal, units and cart button. Now lets do the opposite and remove the item from the cart
function removeItemFromCart(id) {
  // //The below filter propety filters the array with regarding to the condition
  // //the condition is that it wants to keep all the items that is not equal to the id
  cart = cart.filter(item => item.id !== id);
  // //now to see changes we use function updateCart()
  updateCart();
  // //but it will not work as WE DID NOt add call the function in the template above. So in the above template for item-info class we add onclik event where we add removeItemFromCart() function to the click event
  // Next lets add the items to local storage SO that if the user refreses the page we want the items to stay in the cart
  // so now we need to save our cart array to the local storage. And we need to save that cart array whenever we update that cart. To do that I added a property in function updateCart()
}

function addLoadingAnimation() {
  const button = document.getElementById('loadingButton');
  if (button) {
    button.innerHTML = `
      Loading<svg width="150" height="10" viewBox="0 0 450 35" xmlns="http://www.w3.org/2000/svg" fill="#000">
      <circle cx="45" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
          begin="0s" dur="0.8s"
          values="15;9;15" calcMode="linear"
          repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="1" to="1"
          begin="0s" dur="0.8s"
          values="1;.5;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="90" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
          begin="0.8s" dur=".8s"
          values="15;9;15" calcMode="linear"
          repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="1" to="1"
          begin="0.8s" dur="0.8s"
          values="1;.5;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="135" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
          begin="1.6s" dur="0.8s"
          values="15;9;15" calcMode="linear"
          repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="1" to="1"
          begin="1.6s" dur="0.8s"
          values="1;.5;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
          begin="2.4s" dur="0.8s"
          values="15;9;15" calcMode="linear"
          repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="1" to="1"
          begin="2.4s" dur="0.8s"
          values="1;.5;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="225" cy="15" r="15">
        <animate attributeName="r" from="15" to="15"
          begin="3.2s" dur="0.8s"
          values="15;9;15" calcMode="linear"
          repeatCount="indefinite" />
        <animate attributeName="fill-opacity" from="1" to="1"
          begin="3.2s" dur="0.8s"
          values="1;.5;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
    </svg>
    
    `;

    // Disable the button while loading, if needed
    button.disabled = true;

    // Simulate a loading action (you can replace this with your actual loading logic)
    setTimeout(() => {
      // Restore the original button content and enable it
      button.innerHTML = 'Proceed to checkout';
      button.disabled = false;
    }, 4000); // Simulated loading time in milliseconds
  }
}

// Add a click event listener to trigger the loading animation
document
  .getElementById('loadingButton')
  .addEventListener('click', addLoadingAnimation);

const goToTop = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
